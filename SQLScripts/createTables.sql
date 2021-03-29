--------------- Company Table --------------

CREATE TABLE `Company`
(
  `id`             INT(11) NOT NULL auto_increment,
  `name`           VARCHAR(255) NOT NULL,
  `about_text`     VARCHAR(1000) NOT NULL,
  `phone`          CHAR(10) NOT NULL,
  `email`          VARCHAR(40) NOT NULL,
  `official_email` VARCHAR(40) NOT NULL ,
  `created_at`     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`     DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
)

--------------- Students Table --------------

CREATE TABLE `Students`
(
  `id`             INT(11) NOT NULL auto_increment,
  `name`           VARCHAR(255) NOT NULL,
  `phone`          CHAR(10) NOT NULL,
  `email`          VARCHAR(40) NOT NULL,
  `college`        VARCHAR(40) NOT NULL,
  `degree`         VARCHAR(40) NOT NULL ,
  `field_of_study` VARCHAR(40) NOT NULL ,
  `created_at`     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`     DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
)

--------------- Jobs Table --------------


CREATE TABLE `Jobs`
(
  `id`              INT(11) NOT NULL auto_increment,
  `title`           VARCHAR(255) NOT NULL,
  `description`     VARCHAR(1000) NOT NULL,
  `company_id`      INT(11) NOT NULL,
  `salary`          VARCHAR(100) NOT NULL,
  `college`         VARCHAR(1000) NOT NULL ,
  `degree`          VARCHAR(1000) NOT NULL ,
  `field_of_study`  VARCHAR(1000) NOT NULL ,
  `location`        VARCHAR(500) NOT NULL ,
  `created_at`      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`      DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`company_id`) REFERENCES Company(`id`)
)


--------------- Jobs Applicants Table --------------


CREATE TABLE `Job_Applicants`
(
  `id`                 INT(11) NOT NULL auto_increment,
  `job_id`             INT(11) NOT NULL,
  `company_id`         INT(11) NOT NULL,
  `student_id`         INT(11) NOT NULL,
  `application_status` VARCHAR(100) NOT NULL,
  `resume_link`        VARCHAR(100) NOT NULL,
  `created_at`         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`         DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`job_id`) REFERENCES Jobs(`id`),
  FOREIGN KEY (`company_id`) REFERENCES Company(`id`),
  FOREIGN KEY (`student_id`) REFERENCES Students(`id`)
)

---------- Colleges Table ------

CREATE TABLE `college`
(
  `id`             INT(11) NOT NULL auto_increment,
  `name`           VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
)


---------- Degree Table ------

CREATE TABLE `degree`
(
  `id`             INT(11) NOT NULL auto_increment,
  `name`           VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
)

-------- Field of study table---

CREATE TABLE `field_of_study`
(
  `id`             INT(11) NOT NULL auto_increment,
  `name`           VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
)


