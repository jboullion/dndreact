-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 28, 2019 at 07:07 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dndtools`
--

-- --------------------------------------------------------

--
-- Table structure for table `5e_classes`
--

DROP TABLE IF EXISTS `5e_classes`;
CREATE TABLE IF NOT EXISTS `5e_classes` (
  `class_id` int(11) NOT NULL,
  `class_name` int(11) NOT NULL,
  `class_hit_die` int(11) NOT NULL,
  `class_url` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_conditions`
--

DROP TABLE IF EXISTS `5e_conditions`;
CREATE TABLE IF NOT EXISTS `5e_conditions` (
  `condition_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `condition_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `condition_desc` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`condition_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_equipment`
--

DROP TABLE IF EXISTS `5e_equipment`;
CREATE TABLE IF NOT EXISTS `5e_equipment` (
  `equipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `equipment_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_category` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_subcategory` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_range` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_damage` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_weight` int(11) NOT NULL,
  `equipment_damage_type` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `equipment_desc` text COLLATE utf8mb4_bin NOT NULL,
  `equipment_misc` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`equipment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_proficiencies`
--

DROP TABLE IF EXISTS `5e_proficiencies`;
CREATE TABLE IF NOT EXISTS `5e_proficiencies` (
  `proficiency_id` int(11) NOT NULL AUTO_INCREMENT,
  `proficiency_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `proficiency_type` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`proficiency_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_races`
--

DROP TABLE IF EXISTS `5e_races`;
CREATE TABLE IF NOT EXISTS `5e_races` (
  `race_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `race_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `race_speed` tinyint(4) NOT NULL,
  `race_alignment` text COLLATE utf8mb4_bin NOT NULL,
  `race_age` text COLLATE utf8mb4_bin NOT NULL,
  `race_size` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `race_size_desc` text COLLATE utf8mb4_bin NOT NULL,
  `race_language_desc` int(11) NOT NULL,
  `race_url` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`race_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_schools`
--

DROP TABLE IF EXISTS `5e_schools`;
CREATE TABLE IF NOT EXISTS `5e_schools` (
  `school_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `school_name` int(11) NOT NULL,
  `school_desc` int(11) NOT NULL,
  `school_url` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_skills`
--

DROP TABLE IF EXISTS `5e_skills`;
CREATE TABLE IF NOT EXISTS `5e_skills` (
  `skill_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `skll_desc` text COLLATE utf8mb4_bin NOT NULL,
  `skill_ability` tinyint(4) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_spells`
--

DROP TABLE IF EXISTS `5e_spells`;
CREATE TABLE IF NOT EXISTS `5e_spells` (
  `spell_id` int(11) NOT NULL AUTO_INCREMENT,
  `spell_name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `spell_desc` text COLLATE utf8mb4_bin NOT NULL,
  `spell_level` tinyint(4) NOT NULL,
  `spell_range` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `spell_ritual` tinyint(4) NOT NULL DEFAULT '0',
  `spell_concentration` tinyint(4) NOT NULL DEFAULT '0',
  `spell_cast_time` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `spell_duration` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `spell_material` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `spell_components` varchar(3) COLLATE utf8mb4_bin NOT NULL,
  `spell_school` int(11) NOT NULL,
  PRIMARY KEY (`spell_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_spell_classes`
--

DROP TABLE IF EXISTS `5e_spell_classes`;
CREATE TABLE IF NOT EXISTS `5e_spell_classes` (
  `spell_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  UNIQUE KEY `Unique Spell Class` (`spell_id`,`class_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_spell_schools`
--

DROP TABLE IF EXISTS `5e_spell_schools`;
CREATE TABLE IF NOT EXISTS `5e_spell_schools` (
  `spell_id` int(11) NOT NULL,
  `school_id` int(11) NOT NULL,
  UNIQUE KEY `Unique Spell School` (`spell_id`,`school_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `5e_stats`
--

DROP TABLE IF EXISTS `5e_stats`;
CREATE TABLE IF NOT EXISTS `5e_stats` (
  `stat_id` tinyint(4) NOT NULL,
  `stat_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `stat_shortname` varchar(3) COLLATE utf8mb4_bin NOT NULL,
  `stat_desc` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`stat_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='D&D 5e Stats';

--
-- Dumping data for table `5e_stats`
--

INSERT INTO `5e_stats` (`stat_id`, `stat_name`, `stat_shortname`, `stat_desc`) VALUES
(1, 'Strength', 'STR', 'Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.\", \"A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. The Athletics skill reflects aptitude in certain kinds of Strength checks.'),
(2, 'Dexterity', 'DEX', 'Dexterity measures agility, reflexes, and balance.\", \"A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks.'),
(3, 'Constitution', 'CON', 'Constitution measures health, stamina, and vital force.\", \"Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.'),
(4, 'Intelligence', 'INT', 'Intelligence measures mental acuity, accuracy of recall, and the ability to reason.\", \"An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks.'),
(5, 'Wisdom', 'WIS', 'Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.\", \"A Wisdom check might reflect an effort to read body language, understand someones feelings, notice things about the environment, or care for an injured person. The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks.'),
(6, 'Charisma', 'CHA', 'Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.\", \"A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.');

-- --------------------------------------------------------

--
-- Table structure for table `app_characters`
--

DROP TABLE IF EXISTS `app_characters`;
CREATE TABLE IF NOT EXISTS `app_characters` (
  `character_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `data` json DEFAULT NULL,
  `last_played` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`character_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_chat_group`
--

DROP TABLE IF EXISTS `app_chat_group`;
CREATE TABLE IF NOT EXISTS `app_chat_group` (
  `chat_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `Party Index` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_chat_party`
--

DROP TABLE IF EXISTS `app_chat_party`;
CREATE TABLE IF NOT EXISTS `app_chat_party` (
  `chat_id` int(11) NOT NULL AUTO_INCREMENT,
  `party_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `Party Index` (`party_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_chat_user`
--

DROP TABLE IF EXISTS `app_chat_user`;
CREATE TABLE IF NOT EXISTS `app_chat_user` (
  `chat_id` int(11) NOT NULL,
  `send_id` int(11) NOT NULL,
  `receive_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `Receive Index` (`receive_id`),
  KEY `Send Index` (`send_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_groups`
--

DROP TABLE IF EXISTS `app_groups`;
CREATE TABLE IF NOT EXISTS `app_groups` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_group_users`
--

DROP TABLE IF EXISTS `app_group_users`;
CREATE TABLE IF NOT EXISTS `app_group_users` (
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  UNIQUE KEY `Unique User` (`group_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_parties`
--

DROP TABLE IF EXISTS `app_parties`;
CREATE TABLE IF NOT EXISTS `app_parties` (
  `party_id` int(11) NOT NULL AUTO_INCREMENT,
  `party_name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`party_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `app_users`
--

DROP TABLE IF EXISTS `app_users`;
CREATE TABLE IF NOT EXISTS `app_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `logged_in` tinyint(4) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
