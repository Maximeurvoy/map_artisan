-- creation de la database artisansNantes
CREATE DATABASE IF NOT EXISTS artisansNantes;

-- on utilise artisansNantes
USE artisansNantes;

-- creation de la table des differents metier
CREATE TABLE metier (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  metier_type VARCHAR (128)
);

-- creation de la table des differentes prestations
CREATE TABLE prestation (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  prestation_type VARCHAR (128)
);

-- creation de la table artisan
CREATE TABLE  artisan (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  entreprise_nom VARCHAR (128),
  nom_artisan VARCHAR (128),
  prenom_artisan VARCHAR (128),
  site_internet VARCHAR (128),
  numero INT,
  adresse VARCHAR (128),
  photo_url1 VARCHAR (128),
  photo_url2 VARCHAR (128),
  photo_url3 VARCHAR (128),
  ville VARCHAR (128),
  metier_id INT NOT NULL, 
  prestation_id INT NOT NULL,
  FOREIGN KEY (metier_id) REFERENCES metier(id),
  FOREIGN KEY (prestation_id) REFERENCES prestation(id)
);

-- creation de la table de jointure d'offre de prestations des artisans
CREATE TABLE offre (
  id_prestation INT NOT NULL,
  id_artisan INT NOT NULL
);

--creation de la table sur les avis laissé sur les artisans possibilité de plusieur avis pour un même artisan
CREATE TABLE avis (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  commentaire VARCHAR (400),
  id_artisan INT NOT NULL
)

--créetion de la table de jointure créer la réputation d'un artisan
CREATE TABLE reputation (
  id_artisan INT NOT NULL,
  id_avis INT NOT NULL
);



