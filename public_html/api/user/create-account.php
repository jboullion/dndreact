<?php
/**
 * Sign up a new standard user
 * 
 * Called from the signup form
 */

header("content-type:application/json");
session_start();

require_once '../database.php';
require_once '../functions.php';

$data = dnd_get_post_data();

if(empty($data) || empty($data['email']) || empty($data['password'])) {
	echo json_encode(array('error' => 'Info Missing'));
	exit;
}

if (! filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
	echo json_encode(array('error' => 'Invalid Email'));
	exit;
}

//Does this email Exist?
$user = dnd_user_exists($PDO, $data['email']);
if(! empty($user)){
	echo json_encode(array('error' => 'Email Address already Exists'));
	exit;
}

//Insert our new account
$passwordHash = password_hash($data['password'], PASSWORD_DEFAULT);

try{
	$insert = "INSERT INTO app_users (`email`, `password`) VALUES(:email, :password)";

	$stmt = $PDO->prepare($insert);

	$result = $stmt->execute( 
		array(
			'email' => $data['email'],
			'password' => $passwordHash 
		)
	);
}catch(PDOException $e){
	error_log($e->getMessage(), 0);
}

// return our results
if($result){
	echo json_encode(array('success' => 'Account Created'));
	$_SESSION['email'] = $data['email'];
	$_SESSION['user_id'] = $PDO->lastInsertId();
}else{
	echo json_encode(array('error' => 'Unable to create account'));
}