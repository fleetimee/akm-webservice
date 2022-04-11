-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE TBL_USER (
  USERNAME varchar(100),
  PASSWORD varchar(100),
  NAMA_LENGKAP varchar(200),
  EMAIL varchar(100),
  HOST varchar(100),
  DATE_CREATE timestamp(3),
  STATUS char(1),
  GRUP_ID char(4),
  KD_KANTOR char(3) 
);
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE TBL_GRUP (
  GRUP_ID char(4),
  GRUP_NAMA varchar(100),
  GRUP_DISKRIPSI varchar(200)
);
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE TBL_MENU (
 MENU_ID char(4),
 MENU_NAMA varchar(100),
 MENU_LINK varchar(100),
 MENU_DISKRIPSI varchar(200),
 MENU_STATUS varchar(1)  DEFAULT 1 NULL,
 PARENT_ID char(4),
 MENU_ICON varchar(40),
 PARENT_STS varchar(1),
 MENU_KATEGORI varchar(50),
 NO_URUT int NULL
);
'MS_Description', N'0: disable, 1: aktif;', N'schema', N'dbo', N'table', N'TBL_MENU', N'column', N'MENU_STATUS'
'MS_Description', N'0: bukan parent, 1: parent;', N'schema', N'dbo', N'table', N'TBL_MENU', N'column', N'PARENT_STS'

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE TBL_KEWENANGAN (
  GRUP_ID char(4),
  MENU_ID char(4)
);
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE MST_DEBITUR (
  NO_DEB char(10),
  NAMA_DEB varchar(50),
  KD_JNS_DEB char(1),
  EMAIL varchar(50),
  ALAMAT varchar(100),
  KD_PROVINSI char(2),
  KD_KABUPATEN char(4),
  KD_KECAMATAN char(6),
  KD_KELURAHAN char(10),
  KD_POS varchar(5),
  RT varchar(3),
  RW varchar(3),
  NO_TELP varchar(20),
  NO_SELULAR varchar(20),
  USER_INPUT varchar(50),
  USER_UBAH varchar(50)
 );
'MS_Description', N'1: personal, 2: perusahaan;', N'schema', N'dbo', N'table', N'MST_DEBITUR', N'column', N'KD_JNS_DEB'

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE DEB_PERSONAL (
  NO_DEB char(10),
  NIK varchar(30),
  TEMPAT_LAHIR varchar(50),
  TGL_LAHIR timestamp(3) ,
  JNS_KELAMIN char(1),
  KD_AGAMA char(1),
  KD_STS_KAWIN char(1),
  KD_PENDIDIKAN char(1),
  KET_PENDIDIKAN varchar(30),
  KD_PENDUDUK char(1),
  KD_PEKERJAAN char(2),
  KET_PEKERJAAN varchar(30),
  JML_PENGHASILAN money ,
  NPWP varchar(15),
  KD_BID_USAHA_TMP_BEKERJA varchar(10),
  ALAMAT_TMPT_BEKERJA varchar(200),
  KD_INSTANSI int ,
  NAMA_IBU_KANDUNG varchar(50),
  NIK_PASANGAN varchar(16),
  NAMA_PASANGAN varchar(50),
  KD_PEKERJAAN_PASANGAN char(2),
  PENGHASILAN_PASANGAN money ,
  KET_PEKERJAAN_PASANGAN varchar(30),
  TGL_LAHIR_PASANGAN timestamp(3) DEFAULT  ,
  TMPT_LAHIR_PASANGAN varchar(50),
  JUMLAH_TANGGUNGAN int
);