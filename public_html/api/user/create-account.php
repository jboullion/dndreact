<?php
/**
 * Sign up a new standard user
 * 
 * Called from the signup form
 */

//header("content-type:application/json");
session_start();

require_once '../database.php';
require_once '../functions.php';

echo 'Create Account<br />';

dnd_print($_POST);
die();

/*
if(empty($_POST) || empty($_POST['email']) || empty($_POST['password'])) {
	echo json_encode(array('error' => 'Info Missing'));
	exit;
}
if (! filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	echo json_encode(array('error' => 'Invalid Email'));
	exit;
}
//Does this email Exist?
$user = dnd_user_exists($PDO, $_POST['email']);
if(! empty($user)){
	echo json_encode(array('error' => 'Email Address already Exists'));
	exit;
}
//Insert our new account
$passwordHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
try{
	$insert = "INSERT INTO users (user_name, user_email, user_password, user_is_online) VALUES(:user_name, :email, :password, 1)";
	$stmt = $PDO->prepare($insert);
	$result = $stmt->execute( 
		array(
			'user_name' => trim($_POST['username']),
			'email' => $_POST['email'],
			'password' => $passwordHash 
		)
	);
}catch(PDOException $e){
	error_log($e->getMessage(), 0);
}
// return our results
if($result){
	echo json_encode(array('success' => 'Account Created'));
	$_SESSION['email'] = $_POST['email'];
	$_SESSION['user_id'] = $PDO->lastInsertId();
}else{
	echo json_encode(array('error' => 'Unable to create account'));
}
*/