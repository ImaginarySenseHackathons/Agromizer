-- Adminer 4.7.1 PostgreSQL dump

DROP TABLE IF EXISTS "archive";
DROP SEQUENCE IF EXISTS archive_id_seq;
CREATE SEQUENCE archive_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."archive" (
    "id" integer DEFAULT nextval('archive_id_seq') NOT NULL,
    "createdAt" bigint,
    "fromModel" text,
    "originalRecord" json,
    "originalRecordId" json,
    CONSTRAINT "archive_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "beneficial_plants";
CREATE TABLE "public"."beneficial_plants" (
    "plant" integer NOT NULL,
    "benefits_from" integer NOT NULL,
    CONSTRAINT "beneficial_plants_plant_benefits_from" PRIMARY KEY ("plant", "benefits_from")
) WITH (oids = false);


DROP TABLE IF EXISTS "perjudicial_plants";
CREATE TABLE "public"."perjudicial_plants" (
    "plant" integer NOT NULL,
    "perjudicates_from" integer NOT NULL,
    CONSTRAINT "perjudicial_plants_plant_perjudicates_from" PRIMARY KEY ("plant", "perjudicates_from")
) WITH (oids = false);


DROP TABLE IF EXISTS "plants";
DROP SEQUENCE IF EXISTS plants_id_seq;
CREATE SEQUENCE plants_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."plants" (
    "createdAt" bigint,
    "updatedAt" bigint,
    "id" integer DEFAULT nextval('plants_id_seq') NOT NULL,
    "scientific_name" text,
    "common_name" text,
    "nitrogen" boolean,
    "ph_min" real,
    "ph_max" real,
    "distance" real,
    "trunk_diameter" real,
    "type" text,
    "trunk" text,
    CONSTRAINT "plants_common_name_key" UNIQUE ("common_name"),
    CONSTRAINT "plants_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "plants_scientific_name_key" UNIQUE ("scientific_name")
) WITH (oids = false);

INSERT INTO "plants" ("createdAt", "updatedAt", "id", "scientific_name", "common_name", "nitrogen", "ph_min", "ph_max", "distance", "trunk_diameter", "type", "trunk") VALUES
(1554339772140,	1554339772140,	1,	'Citrullus lanatus',	'Sandía',	'f',	5.8,	7.2,	1.5,	0,	'Frutal',	''),
(1554339772140,	1554339772140,	2,	'Solanum melongena',	'Berenjena',	'f',	5.5,	7,	0.45,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	3,	'Cucumis melo',	'Melón',	'f',	5.8,	7.2,	1.2,	0,	'Frutal',	''),
(1554339772140,	1554339772140,	4,	'Solanum lycopersicum',	'Tomate',	'f',	5.3,	6.8,	0.06,	0,	'Frutal',	''),
(1554339772140,	1554339772140,	5,	'Daucos corota',	'Zanahoria',	'f',	6.5,	6.5,	0.08,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	6,	'Cucurbita pepo',	'Ahuyama',	'f',	4.5,	7.5,	0,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	7,	'Cucumis sativa',	'Pepino',	'f',	5.6,	6.8,	1.2,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	8,	'Capsicum annuum',	'Pimentón',	'f',	5.8,	7,	0.4,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	9,	'Beta vulgaris',	'Remolacha',	'f',	5.5,	6.5,	0.08,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	10,	'Apium graveolens',	'Apio',	'f',	5.8,	7.2,	0.3,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	11,	'Pisum sativum',	'Arveja',	't',	5.5,	6.8,	0,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	12,	'Brassica oleracea',	'Brócoli',	'f',	6,	7.3,	0.45,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	13,	'Lactuca sativa',	'Lechuga',	'f',	6.4,	7.6,	0.25,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	14,	'Brassica oleracea capitata',	'Repollo',	'f',	6,	7.2,	0.45,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	15,	'Phaseolus vulgaris',	'Frijol',	't',	5.5,	6.5,	0.4,	0,	'Hortaliza',	''),
(1554339772140,	1554339772140,	16,	'Persea americana',	'Aguacate',	'f',	5.5,	7,	8,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	17,	'Prunus persica',	'Melocotón',	'f',	6,	6.5,	6,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	18,	'Annona muricata',	'Guanábana',	'f',	5.5,	6.4,	7,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	19,	'Mangifera indica',	'Mango',	'f',	6,	7.9,	10,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	20,	'Carica papaya',	'Papaya',	'f',	5,	6.5,	3,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	21,	'Pyrus communis',	'Pera',	'f',	6.5,	7.5,	6,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	22,	'Tamarindus indica',	'Tamarindo',	't',	6.5,	7.5,	7,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	23,	'Citrus × paradisi',	'Toronja',	'f',	6.1,	7,	7,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	24,	'Citrus × sinensis',	'Naranja dulce',	'f',	6,	6.5,	6,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	25,	'Citrus reticulata',	'Mandarina',	'f',	6.6,	7.5,	6,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	27,	'Psidium guajava',	'Guayaba',	'f',	6,	6.5,	6,	0,	'Frutal',	'Árbol'),
(1554339772140,	1554339772140,	28,	'Acacia sensu lato',	'Acacia',	't',	6.5,	7.5,	5,	0,	'',	'Árbol'),
(1554339772140,	1554339772140,	29,	'Moriga oleifera',	'Moringa',	't',	0,	0,	4,	0,	'',	'Árbol'),
(1554339772140,	1554339772140,	30,	'Medicago sativa',	'Alfalfa',	't',	6,	6.5,	0.9,	0,	'',	'Herbáceo'),
(1554339772140,	1554339772140,	31,	'Allium sativum',	'Ajo',	'f',	0,	0,	0.15,	0,	'',	'Subterraneo'),
(1554339772140,	1554339772140,	32,	'Musa paradisiaca',	'Platano',	'f',	5,	8,	3,	0,	'',	'Herbáceo'),
(1554339772140,	1554339772140,	33,	'Rosmarinus officinalis',	'Romero',	'f',	6,	7,	0.3,	0,	'Aromática',	''),
(1554339772140,	1554339772140,	34,	'Ocimum',	'Albahaca',	'f',	0,	0,	0.23,	0,	'Aromática',	''),
(1554339772140,	1554339772140,	26,	'Citrus × limon',	'Limón',	'f',	6.6,	7.5,	6,	0,	'Frutal',	'Árbol');

-- 2019-04-04 00:06:18.868024-04
