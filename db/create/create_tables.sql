CREATE TABLE IF NOT EXISTS med_users (
    id int(11) NOT NULL AUTO_INCREMENT,
    username varchar(30) UNIQUE NOT NULL,
    pwhash varchar(40) NOT NULL,
    PRIMARY KEY (id) 
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_gender (
    id smallint NOT NULL AUTO_INCREMENT,
    name varchar(30) UNIQUE NOT NULL,
    PRIMARY KEY (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_positions (
    id int(11) NOT NULL AUTO_INCREMENT,
    position varchar(30) UNIQUE NOT NULL,
    PRIMARY KEY (id)       
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_prescribers (
    id int(11) NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    position varchar(30) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (position) REFERENCES med_positions (position)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_fields (
    id int(11) NOT NULL AUTO_INCREMENT,
    field varchar(30) UNIQUE NOT NULL,
    head int NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (head) REFERENCES med_prescribers (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_prescriber_fields (
    id int(11) NOT NULL AUTO_INCREMENT,
    prescriber_id int NOT NULL,
    field varchar(30) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (prescriber_id) REFERENCES med_prescribers (id),
    FOREIGN KEY (field) REFERENCES med_fields (field)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_patients (
    id int(11) NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    title varchar(30) NULL,
    gender varchar(30) NULL,
    date_of_birth date NOT NULL,
    registered_date date NOT NULL,
    primary_prescriber int NULL,
    PRIMARY KEY (id),
    UNIQUE `first_name_last_name_date_of_birth` (first_name, last_name, date_of_birth),
    FOREIGN KEY (gender) REFERENCES med_gender (name),
    FOREIGN KEY (primary_prescriber) REFERENCES med_prescribers (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_symptoms (
    id int(11) NOT NULL AUTO_INCREMENT,
    symptom varchar(60) UNIQUE NOT NULL,
    note mediumtext NULL,
    PRIMARY KEY (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_drugs (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(60) NOT NULL,
    code varchar(30) UNIQUE NOT NULL,
    manufacturer varchar(60) NOT NULL,
    note mediumtext NULL,
    PRIMARY KEY (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_drug_symptoms (
    id int(11) NOT NULL AUTO_INCREMENT,
    drug_code varchar(30) NOT NULL,
    symptom varchar(60) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (drug_code) REFERENCES med_drugs (code),
    FOREIGN KEY (symptom) REFERENCES med_symptoms (symptom)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_diagnoses (
    id int(11) NOT NULL AUTO_INCREMENT,
    diagnosis mediumtext NOT NULL,
    diagnosis_date date NOT NULL,
    patient_id int NOT NULL,
    prescriber_id int NOT NULL,
    prescription mediumtext NULL,
    note mediumtext NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (prescriber_id) REFERENCES med_prescribers (id),
    FOREIGN KEY (patient_id) REFERENCES med_patients (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_diagnosis_symptoms (
    id int(11) NOT NULL AUTO_INCREMENT,
    diagnosis int NOT NULL,
    symptom varchar(60) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (diagnosis) REFERENCES med_diagnoses (id),
    FOREIGN KEY (symptom) REFERENCES med_symptoms (symptom)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_orders (
    id int(11) NOT NULL AUTO_INCREMENT,
    order_date date NOT NULL,
    diagnosis_id int NOT NULL,
    drug_code varchar(60) NOT NULL,
    dosage float NOT NULL,                    /* 3, 5, 2 */
    dosage_unit varchar(30) NOT NULL,         /* ml, teaspoons, tablets */
    frequency varchar(30) NOT NULL,           /* 2x */
    frequency_period varchar(30) NOT NULL,    /* daily */
    PRIMARY KEY (id),
    FOREIGN KEY (diagnosis_id) REFERENCES med_diagnoses (id),
    FOREIGN KEY (drug_code) REFERENCES med_drugs (code)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_visit_reasons (
    id int(11) NOT NULL AUTO_INCREMENT,
    reason varchar(120) UNIQUE NOT NULL,
    note mediumtext NULL,
    PRIMARY KEY (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

CREATE TABLE IF NOT EXISTS med_visits (
    id int(11) NOT NULL AUTO_INCREMENT,
    visit_date date NOT NULL,
    note mediumtext NULL,
    reason_id int NOT NULL,
    patient_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (reason_id) REFERENCES med_visit_reasons (id),
    FOREIGN KEY (patient_id) REFERENCES med_patients (id)
) ENGINE='InnoDB' COLLATE 'utf8mb4_0900_ai_ci';

