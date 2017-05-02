-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: mall
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appliance`
--

DROP TABLE IF EXISTS `appliance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appliance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '8',
  `classify_name` char(20) NOT NULL DEFAULT '家电',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/appliance/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/appliance/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'appliance',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appliance`
--

LOCK TABLES `appliance` WRITE;
/*!40000 ALTER TABLE `appliance` DISABLE KEYS */;
INSERT INTO `appliance` VALUES (1,8,'家电',9242,3523,NULL,'/synopsis/appliance/1','/images/goods/appliance/1.jpg','Panasonic/松下 XQB75-Q57231 大容量7.5kg全自动波静音轮洗衣机8','appliance'),(2,8,'家电',9213,7754,NULL,'/synopsis/appliance/2','/images/goods/appliance/2.jpg','Homa/奥马 BCD-285K冰箱双门家用小型双开门三门式多门四门电冰箱','appliance'),(3,8,'家电',4979,9332,NULL,'/synopsis/appliance/3','/images/goods/appliance/3.jpg','Midea/美的 BCD-169CM(E)双门冰箱小型家用双开节能小双门电冰箱','appliance'),(4,8,'家电',7885,7794,NULL,'/synopsis/appliance/4','/images/goods/appliance/4.jpg','Panasonic/松下 XQB75-Q57231 大容量7.5kg全自动波静音轮洗衣机8','appliance'),(5,8,'家电',9194,8761,NULL,'/synopsis/appliance/5','/images/goods/appliance/5.jpg','Ronshen/容声 BCD-245WD11NY 三门家用节能冰箱电脑温控风冷无霜','appliance'),(6,8,'家电',4099,4953,NULL,'/synopsis/appliance/6','/images/goods/appliance/6.jpg','Haier/海尔 EG8012B29WI 8公斤大容量全自动变频静音滚筒洗衣机','appliance'),(7,8,'家电',7840,152,NULL,'/synopsis/appliance/7','/images/goods/appliance/7.jpg','SIEMENS/西门子 KA92NV09TI 双开门家用对开门电冰箱变频旗舰款','appliance'),(8,8,'家电',5117,1367,NULL,'/synopsis/appliance/8','/images/goods/appliance/8.jpg','SIEMENS/西门子 KM48EA90TI四门 双门家用多门混冷无霜变频电冰箱','appliance'),(9,8,'家电',2514,7775,NULL,'/synopsis/appliance/9','/images/goods/appliance/9.jpg','SIEMENS/西门子 WM10L2688W 洗衣机滚筒8公斤全自动变频超薄家用','appliance'),(10,8,'家电',1944,7457,NULL,'/synopsis/appliance/10','/images/goods/appliance/10.jpg','TCL BCD-205TF1 205升三门冰箱家用节能省电三开门式电冰箱分期购','appliance');
/*!40000 ALTER TABLE `appliance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '9',
  `classify_name` char(20) NOT NULL DEFAULT '图书',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/books/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/books/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'books',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,9,'图书',72,1286,NULL,'/synopsis/books/1','/images/goods/books/1.jpg','分区包邮全套60本幼儿童话故事书绘本宝宝睡前故事书启蒙认知睡前小故事图书','books'),(2,9,'图书',41,7530,NULL,'/synopsis/books/2','/images/goods/books/2.jpg','【当当网 正版包邮】嫌疑人X的献身 继白夜行后东野圭吾新作 纯粹的爱','books'),(3,9,'图书',65,5285,NULL,'/synopsis/books/3','/images/goods/books/3.jpg','【当当网 正版包邮】解忧杂货店 东野圭吾继白夜行疾风回旋曲之后又一新书','books'),(4,9,'图书',92,6658,NULL,'/synopsis/books/4','/images/goods/books/4.jpg','8本装 国学经典书籍全套正版 儿童故事书3-6岁 三字经 笠翁对韵 弟子规','books'),(5,9,'图书',35,1524,NULL,'/synopsis/books/5','/images/goods/books/5.jpg','全10册做优秀的自己一年级二年级课外书必读注音版故事书小学生课外','books'),(6,9,'图书',63,7781,NULL,'/synopsis/books/6','/images/goods/books/6.jpg','正版现货包邮 平凡的世界(共3册)全三册3册 畅销图书籍 路遥著 全套全集','books'),(7,9,'图书',78,7621,NULL,'/synopsis/books/7','/images/goods/books/7.jpg','唐诗300首完整版儿童唐诗三百首幼儿早教书全集彩图注音版正版书籍儿童图书小学生必背古诗','books'),(8,9,'图书',45,2352,NULL,'/synopsis/books/8','/images/goods/books/8.jpg','【下单减6元】天才在左疯子在右 完整版 陈乔恩推荐 新增封杀篇章 高铭','books'),(9,9,'图书',18,4534,NULL,'/synopsis/books/9','/images/goods/books/9.jpg','【4本 拍下9.9元】三字经 弟子规 唐诗 论语 经典国学启蒙教材 小学生','books'),(10,9,'图书',9,5870,NULL,'/synopsis/books/10','/images/goods/books/10.jpg','【中信书店 正版包邮】霍乱时期的爱情(2015版) 精装 诺贝尔文学奖得主','books');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classify`
--

DROP TABLE IF EXISTS `classify`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classify` (
  `id` int(11) NOT NULL,
  `name` char(10) NOT NULL,
  `src` text NOT NULL,
  `url` text NOT NULL,
  `field` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classify`
--

LOCK TABLES `classify` WRITE;
/*!40000 ALTER TABLE `classify` DISABLE KEYS */;
INSERT INTO `classify` VALUES (1,'女装','/images/classifyIcon/frock.jpg','/classify/frock','frock'),(2,'男装','/images/classifyIcon/manClothing.jpg','/classify/manClothing','manclothing'),(3,'女鞋','/images/classifyIcon/womenShoes.jpg','/classify/womenShoes','womenshoes'),(4,'男鞋','/images/classifyIcon/manShoes.jpg','/classify/manShoes','manshoes'),(5,'箱包','/images/classifyIcon/luggage.jpg','/classify/luggage','luggage'),(6,'化妆品','/images/classifyIcon/toiletry.jpg','/classify/toiletry','toiletry'),(7,'零食','/images/classifyIcon/snacks.jpg','/classify/snack','snack'),(8,'家电','/images/classifyIcon/appliance.jpg','/classify/appliance','appliance'),(9,'图书','/images/classifyIcon/books.jpg','/classify/books','books'),(10,'酒水','/images/classifyIcon/wine.jpg','/classify/wine','wine');
/*!40000 ALTER TABLE `classify` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frock`
--

DROP TABLE IF EXISTS `frock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `frock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '1',
  `classify_name` char(20) NOT NULL DEFAULT '女装',
  `price` int(11) NOT NULL,
  `sales` int(11) DEFAULT '0',
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/frock/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/frock/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'frock',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frock`
--

LOCK TABLES `frock` WRITE;
/*!40000 ALTER TABLE `frock` DISABLE KEYS */;
INSERT INTO `frock` VALUES (1,1,'女装',168,99,NULL,'/synopsis/frock/1','/images/goods/frock/1.jpg','棉麻连衣裙女中长款2017春秋新款女装韩版两件套长袖时尚套装裙潮','frock'),(2,1,'女装',68,69,NULL,'/synopsis/frock/2','/images/goods/frock/2.jpg','圆领宽松厚款针织打底衫女长袖春装套头下摆开叉韩版女装上衣t恤','frock'),(3,1,'女装',324,12,NULL,'/synopsis/frock/3','/images/goods/frock/3.jpg','春装韩版大码胖mm纯棉加厚打底衫女士上衣长袖黑白条纹t恤女装','frock'),(4,1,'女装',12,34,NULL,'/synopsis/frock/4','/images/goods/frock/4.jpg','夏季雪纺连衣裙女长袖中长款春秋2017新款韩版显瘦时尚小碎花裙子','frock'),(5,1,'女装',7,282,NULL,'/synopsis/frock/5','/images/goods/frock/5.jpg','茵曼棉素系列文艺基础款V领棉质百搭打底长袖T恤女上衣1871023028','frock'),(6,1,'女装',692,684,NULL,'/synopsis/frock/6','/images/goods/frock/6.jpg','茵曼棉素系列文艺基础款V领棉质百搭打底长袖T恤女上衣1871023028','frock'),(7,1,'女装',417,54,NULL,'/synopsis/frock/7','/images/goods/frock/7.jpg','春装白色高腰连帽卫衣女套头短款长袖t恤韩版学生修身露脐上衣潮','frock'),(8,1,'女装',240,174,NULL,'/synopsis/frock/8','/images/goods/frock/8.jpg','2017春装新款女装连衣裙中长款通勤职业修身大码气质春秋a字裙子','frock'),(9,1,'女装',437,313,NULL,'/synopsis/frock/9','/images/goods/frock/9.jpg','2017春装新款女装连衣裙中长款职业修身大码长袖春秋黑色A字裙子','frock'),(10,1,'女装',459,106,NULL,'/synopsis/frock/10','/images/goods/frock/10.jpg','韩潮袭人2017春装新款大码蝙蝠袖T恤女宽松拼接镂空打底体恤衫子','frock'),(12,1,'女装',123,123,NULL,'/synopsis/frock/','/images/goods/frock/','asd','frock');
/*!40000 ALTER TABLE `frock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `luggage`
--

DROP TABLE IF EXISTS `luggage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `luggage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '5',
  `classify_name` char(20) NOT NULL DEFAULT '箱包',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/luggage/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/luggage/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'luggage',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `luggage`
--

LOCK TABLES `luggage` WRITE;
/*!40000 ALTER TABLE `luggage` DISABLE KEYS */;
INSERT INTO `luggage` VALUES (1,5,'箱包',452,535,NULL,'/synopsis/luggage/1','/images/goods/luggage/1.jpg','中学生书包男时尚潮流大学生开学书包学院风韩版背包女高中双肩包','luggage'),(2,5,'箱包',252,831,NULL,'/synopsis/luggage/2','/images/goods/luggage/2.jpg','花花公子男包商务 休闲单肩包横款大包 潮男皮包公文包手提包男士','luggage'),(3,5,'箱包',873,492,NULL,'/synopsis/luggage/3','/images/goods/luggage/3.jpg','米熙单肩包男士包包休闲商务单肩斜挎包学生书包运动挎包公文包潮','luggage'),(4,5,'箱包',970,8,NULL,'/synopsis/luggage/4','/images/goods/luggage/4.jpg','卓梵 阿玛尼男士钱包长款牛皮手拿包男拉链钱夹大容量手包男包','luggage'),(5,5,'箱包',624,900,NULL,'/synopsis/luggage/5','/images/goods/luggage/5.jpg','七匹狼男士真皮短款钱包 潮男休闲钱夹 头层牛皮多功能青年票夹','luggage'),(6,5,'箱包',259,836,NULL,'/synopsis/luggage/6','/images/goods/luggage/6.jpg','艾伯斯双肩包男背包女韩版大学生书包男士时尚潮流简约商务电脑包','luggage'),(7,5,'箱包',360,598,NULL,'/synopsis/luggage/7','/images/goods/luggage/7.jpg','欧美双肩包男背包时尚潮流学生韩版书包女皮质PU个性百搭街头英伦','luggage'),(8,5,'箱包',802,809,NULL,'/synopsis/luggage/8','/images/goods/luggage/8.jpg','第九城双肩包男韩版英伦百搭男士背包时尚街头潮流旅行大学生书包','luggage'),(9,5,'箱包',600,812,NULL,'/synopsis/luggage/9','/images/goods/luggage/9.jpg','海贼可充电双肩包书包男时尚潮流韩版初中学生高中帆布校园背包大','luggage'),(10,5,'箱包',116,51,NULL,'/synopsis/luggage/10','/images/goods/luggage/10.jpg','小怪兽胸包男韩版 学生帆布牛津布运动休闲单肩包斜挎包男士男包','luggage');
/*!40000 ALTER TABLE `luggage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manclothing`
--

DROP TABLE IF EXISTS `manclothing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manclothing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '2',
  `classify_name` char(20) NOT NULL DEFAULT '男装',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/manClothing/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/manClothing/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'manClothing',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manclothing`
--

LOCK TABLES `manclothing` WRITE;
/*!40000 ALTER TABLE `manclothing` DISABLE KEYS */;
INSERT INTO `manclothing` VALUES (1,2,'男装',417,368,NULL,'/synopsis/manClothing/1','/images/goods/manClothing/1.jpg','墨麦客男装春季新品休闲男士针织衫毛衣男开衫V领薄款外套潮3011','manClothing'),(2,2,'男装',122,572,NULL,'/synopsis/manClothing/2','/images/goods/manClothing/2.jpg','Youngor/雅戈尔春秋新款长袖衬衫 男士商务正装免烫职业条纹衬衣','manClothing'),(3,2,'男装',344,763,NULL,'/synopsis/manClothing/3','/images/goods/manClothing/3.jpg','2017春季男士夹克衫中年爸爸男装春秋韩版棒球领修身青年薄款外套','manClothing'),(4,2,'男装',844,716,NULL,'/synopsis/manClothing/4','/images/goods/manClothing/4.jpg','春夏季中年男士休闲裤宽松直筒西裤中老年男裤春秋男装爸爸长裤子','manClothing'),(5,2,'男装',728,594,NULL,'/synopsis/manClothing/5','/images/goods/manClothing/5.jpg','春夏季男士休闲裤青年韩版修身小脚裤男裤宽松运动直筒长裤潮裤子','manClothing'),(6,2,'男装',674,315,NULL,'/synopsis/manClothing/6','/images/goods/manClothing/6.jpg','男士长袖衬衫薄款英伦春季格子商务休闲青年中年修身型男寸衬衣服','manClothing'),(7,2,'男装',363,542,NULL,'/synopsis/manClothing/7','/images/goods/manClothing/7.jpg','弹力休闲裤男裤青年修身直筒春秋款男士秋季长裤子黑色商务小脚裤','manClothing'),(8,2,'男装',286,851,NULL,'/synopsis/manClothing/8','/images/goods/manClothing/8.jpg','哈伦裤男宽松小脚长裤子休闲运动裤束脚学生收口卫裤2017新款春季','manClothing'),(9,2,'男装',932,140,NULL,'/synopsis/manClothing/9','/images/goods/manClothing/9.jpg','春夏衬衫男长袖衬衣青少年学生休闲牛津纺男士式纯色时尚韩版修身','manClothing'),(10,2,'男装',312,575,NULL,'/synopsis/manClothing/10','/images/goods/manClothing/10.jpg','春夏衬衫男士长袖衬衣青少年纯棉复古休闲学生工装打底韩版修身潮','manClothing');
/*!40000 ALTER TABLE `manclothing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manshoes`
--

DROP TABLE IF EXISTS `manshoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manshoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '4',
  `classify_name` char(20) NOT NULL DEFAULT '男鞋',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/manShoes/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/manShoes/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'manShoes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manshoes`
--

LOCK TABLES `manshoes` WRITE;
/*!40000 ALTER TABLE `manshoes` DISABLE KEYS */;
INSERT INTO `manshoes` VALUES (1,4,'男鞋',481,632,NULL,'/synopsis/manShoes/1','/images/goods/manShoes/1.jpg','拾聚老北京布鞋男中老年爸爸鞋男鞋春秋季套脚懒人鞋子透气休闲鞋','manShoes'),(2,4,'男鞋',407,438,NULL,'/synopsis/manShoes/2','/images/goods/manShoes/2.jpg','花花公子男鞋男士透气网鞋网面运动鞋男春季跑步鞋休闲板鞋鞋子男','manShoes'),(3,4,'男鞋',262,440,NULL,'/synopsis/manShoes/3','/images/goods/manShoes/3.jpg','人本帆布鞋男春季潮学生休闲鞋情侣韩版低帮白色布鞋板鞋男鞋单鞋','manShoes'),(4,4,'男鞋',120,28,NULL,'/synopsis/manShoes/4','/images/goods/manShoes/4.jpg','拾聚老北京布鞋男中老年人爸爸鞋子透气春秋季套脚男鞋商务休闲鞋','manShoes'),(5,4,'男鞋',524,595,NULL,'/synopsis/manShoes/5','/images/goods/manShoes/5.jpg','男鞋春季潮鞋2017新款潮流百搭板鞋韩版休闲鞋子男生运动鞋帆布鞋','manShoes'),(6,4,'男鞋',469,355,NULL,'/synopsis/manShoes/6','/images/goods/manShoes/6.jpg','花花公子男鞋春季男士商务正装皮鞋真皮青年英伦尖头系带大码鞋子','manShoes'),(7,4,'男鞋',357,131,NULL,'/synopsis/manShoes/7','/images/goods/manShoes/7.jpg','人本春季休闲男鞋 帆布鞋情侣运动板鞋 男士内增高小白鞋男潮鞋子','manShoes'),(8,4,'男鞋',130,468,NULL,'/synopsis/manShoes/8','/images/goods/manShoes/8.jpg','金利来男鞋男士商务正装休闲皮鞋男真皮尖头英伦系带软底新郎婚鞋','manShoes'),(9,4,'男鞋',398,975,NULL,'/synopsis/manShoes/9','/images/goods/manShoes/9.jpg','2017新款男鞋春季潮鞋韩版休闲鞋黑色潮男鞋子百搭运动鞋跑步鞋','manShoes'),(10,4,'男鞋',763,562,NULL,'/synopsis/manShoes/10','/images/goods/manShoes/10.jpg','2017春季新款运动男鞋子韩版潮流男士休闲板鞋增高跑步潮鞋百搭黑','manShoes');
/*!40000 ALTER TABLE `manshoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` int(11) NOT NULL,
  `classify` char(30) NOT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1',
  `user_id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `commented` int(11) DEFAULT '0',
  `visibility` int(11) DEFAULT '1',
  `address` varchar(100) NOT NULL DEFAULT '上海 闵行 莘松路1122',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (19,2,'books','2017-04-14 00:06:13',1,1,1,0,1,'上海 闵行 莘松路1122'),(20,2,'books','2017-04-14 00:09:27',1,1,1,0,1,'上海 闵行 莘松路1122'),(21,1,'frock','2017-04-14 00:17:39',1,1,1,0,1,'上海 闵行 莘松路1122'),(22,2,'frock','2017-04-14 00:18:33',1,1,1,0,1,'上海 闵行 莘松路1122'),(23,4,'manShoes','2017-04-14 10:55:56',1,1,1,0,1,'上海 闵行 莘松路1122');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `snack`
--

DROP TABLE IF EXISTS `snack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `snack` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '7',
  `classify_name` char(20) NOT NULL DEFAULT '零食',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/snack/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/snack/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'snack',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `snack`
--

LOCK TABLES `snack` WRITE;
/*!40000 ALTER TABLE `snack` DISABLE KEYS */;
INSERT INTO `snack` VALUES (1,7,'零食',611,746,NULL,'/synopsis/snack/1','/images/goods/snack/1.jpg','口口妙香蕉牛奶蛋糕手撕面包整箱2箱零食蒸早餐提子面包食品年货','snack'),(2,7,'零食',214,385,NULL,'/synopsis/snack/2','/images/goods/snack/2.jpg','百吉福儿童棒棒奶酪500g*2原味/混合水果味健康营养休闲零食套餐','snack'),(3,7,'零食',116,619,NULL,'/synopsis/snack/3','/images/goods/snack/3.jpg','创食人零食大礼包小吃香辣鸭脖小包藕片散装熟食卤味【混合30袋】','snack'),(4,7,'零食',147,978,NULL,'/synopsis/snack/4','/images/goods/snack/4.jpg','纽尔多黑米紫米面包880g 奶酪包三明治三层夹心切片营养早餐零食','snack'),(5,7,'零食',30,803,NULL,'/synopsis/snack/5','/images/goods/snack/5.jpg','友梦早餐手撕小面包食品蒸三明治蒸蛋糕套餐零食糕点整箱1000g','snack'),(6,7,'零食',787,451,NULL,'/synopsis/snack/6','/images/goods/snack/6.jpg','艾菲勒马卡龙甜点法式手工休闲甜品西式糕点12枚礼盒零食点心','snack'),(7,7,'零食',585,150,NULL,'/synopsis/snack/7','/images/goods/snack/7.jpg','欧贝拉蒸蛋糕整箱包邮 早餐手撕口袋面包糕点心零食品大礼包批发','snack'),(8,7,'零食',158,515,NULL,'/synopsis/snack/8','/images/goods/snack/8.jpg','惠优手撕面包800g早餐食品小零食芝士糕点营养蒸蛋糕整箱多省免邮','snack'),(9,7,'零食',762,997,NULL,'/synopsis/snack/9','/images/goods/snack/9.jpg','抢【三只松鼠_小贱牛肉粒110g】零食特产小吃牛肉干香辣味/XO酱味','snack'),(10,7,'零食',921,754,NULL,'/synopsis/snack/10','/images/goods/snack/10.jpg','【百草味-夹心麻薯210gx3袋】零食特产美食小吃 糕点点心早餐食品','snack');
/*!40000 ALTER TABLE `snack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `toiletry`
--

DROP TABLE IF EXISTS `toiletry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `toiletry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '6',
  `classify_name` char(20) NOT NULL DEFAULT '化妆品',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/toiletry/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/toiletry/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'toiletry',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `toiletry`
--

LOCK TABLES `toiletry` WRITE;
/*!40000 ALTER TABLE `toiletry` DISABLE KEYS */;
INSERT INTO `toiletry` VALUES (1,6,'化妆品',376,700,NULL,'/synopsis/toiletry/1','/images/goods/toiletry/1.jpg','【天猫超市】韩熙贞口红持久保湿唇彩不脱色咬唇妆滋润补水唇膏','toiletry'),(2,6,'化妆品',357,548,NULL,'/synopsis/toiletry/2','/images/goods/toiletry/2.jpg','ck/凯文克莱ck one be男士女士中性淡香水100/200ml持久 清新','toiletry'),(3,6,'化妆品',862,788,NULL,'/synopsis/toiletry/3','/images/goods/toiletry/3.jpg','第二支半价稚优泉口红持久保湿不易脱色南瓜西柚豆沙色唇膏防水不','toiletry'),(4,6,'化妆品',984,240,NULL,'/synopsis/toiletry/4','/images/goods/toiletry/4.jpg','【天猫超市】雅邦口红持久保湿不易脱色滋润不干唇膏唇彩咬唇妆','toiletry'),(5,6,'化妆品',485,419,NULL,'/synopsis/toiletry/5','/images/goods/toiletry/5.jpg','Ck凯文克莱CK in2u因为你喜欢你男士清新持久香水50/100/150ml','toiletry'),(6,6,'化妆品',788,535,NULL,'/synopsis/toiletry/6','/images/goods/toiletry/6.jpg','梦妆口红花心蜡笔唇膏 持久不易脱色韩国16号豆沙色新款珊瑚姨妈','toiletry'),(7,6,'化妆品',730,674,NULL,'/synopsis/toiletry/7','/images/goods/toiletry/7.jpg','兰蔻 奇迹绽放香水香氛50ml 100ml 花果香调 甜美清新 优雅绽放','toiletry'),(8,6,'化妆品',748,885,NULL,'/synopsis/toiletry/8','/images/goods/toiletry/8.jpg','玻儿口红持久保湿不脱色防水不沾杯滋润唇膏女学生咬唇妆彩妆正品','toiletry'),(9,6,'化妆品',272,77,NULL,'/synopsis/toiletry/9','/images/goods/toiletry/9.jpg','法颂男士香水持久淡香 星海50ML清新法国香水 正品古龙水送3小样','toiletry'),(10,6,'化妆品',899,786,NULL,'/synopsis/toiletry/10','/images/goods/toiletry/10.jpg','绿缘萝口红持久保湿滋润唇膏不易脱色豆沙西柚哑光姨妈色防水不干','toiletry');
/*!40000 ALTER TABLE `toiletry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL,
  `phone` char(11) NOT NULL,
  `password` char(30) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `avatar` varchar(1000) NOT NULL DEFAULT '/images/test.jpg',
  `address` text,
  `cart` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ju1234','18756157688','sandiansan.','2017-04-07 05:52:53','/images/test.jpg',NULL,'[{\"id\":1,\"classify\":\"frock\"},{\"id\":2,\"classify\":\"books\"},{\"id\":4,\"classify\":\"appliance\"},{\"id\":3,\"classify\":\"luggage\"}]');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wine`
--

DROP TABLE IF EXISTS `wine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '10',
  `classify_name` char(20) NOT NULL DEFAULT '茶酒',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/wine/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/wine/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'wine',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine`
--

LOCK TABLES `wine` WRITE;
/*!40000 ALTER TABLE `wine` DISABLE KEYS */;
INSERT INTO `wine` VALUES (1,10,'酒水',547,4921,NULL,'/synopsis/wine/1','/images/goods/wine/1.jpg','进口啤酒 德国啤酒 保拉纳 柏龙小麦啤酒 整箱500mL*24','wine'),(2,10,'酒水',896,8924,NULL,'/synopsis/wine/2','/images/goods/wine/2.jpg','酒划算 法国进口凯旋1664白啤酒250ml*12瓶整箱6种口味水果味整箱','wine'),(3,10,'酒水',204,4723,NULL,'/synopsis/wine/3','/images/goods/wine/3.jpg','澳图红酒 法国原瓶进口干红买一箱送一箱金标赤霞珠红葡萄酒整箱','wine'),(4,10,'酒水',995,949,NULL,'/synopsis/wine/4','/images/goods/wine/4.jpg','山西汾酒杏花村酒 竹叶青酒45度500mL*6瓶装国产清香型白酒','wine'),(5,10,'酒水',139,2922,NULL,'/synopsis/wine/5','/images/goods/wine/5.jpg','青岛啤酒爆款经典系列PK德国啤酒500ml*12听*2箱 镇店之宝','wine'),(6,10,'酒水',478,604,NULL,'/synopsis/wine/6','/images/goods/wine/6.jpg','拉菲红酒官方正品原瓶进口巴斯克花园干红葡萄酒6支装送木箱','wine'),(7,10,'酒水',535,1036,NULL,'/synopsis/wine/7','/images/goods/wine/7.jpg','新日期 法国原装进口啤酒克伦堡1664白啤酒250mL×24瓶整箱','wine'),(8,10,'酒水',761,684,NULL,'/synopsis/wine/8','/images/goods/wine/8.jpg','RIO锐澳鸡尾酒预调酒超值套餐混合装275ml*24瓶洋酒','wine'),(9,10,'酒水',765,9481,NULL,'/synopsis/wine/9','/images/goods/wine/9.jpg','【天猫超市】长城窖酿解百纳红酒干红葡萄酒750ml*6瓶国产整箱装','wine'),(10,10,'酒水',450,436,NULL,'/synopsis/wine/10','/images/goods/wine/10.jpg','江小白北上广同款白酒国产清香型高粱粮食酒45度100ml*2瓶*2盒装','wine');
/*!40000 ALTER TABLE `wine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `womenshoes`
--

DROP TABLE IF EXISTS `womenshoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `womenshoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classify_id` int(11) NOT NULL DEFAULT '3',
  `classify_name` char(20) NOT NULL DEFAULT '女鞋',
  `price` int(11) NOT NULL,
  `sales` int(11) NOT NULL,
  `comment` text,
  `url` varchar(1000) NOT NULL DEFAULT '/synopsis/womenShoes/',
  `src` varchar(1000) NOT NULL DEFAULT '/images/goods/womenShoes/',
  `synopsis` char(50) NOT NULL,
  `classify_eng` char(30) NOT NULL DEFAULT 'womenShoes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `womenshoes`
--

LOCK TABLES `womenshoes` WRITE;
/*!40000 ALTER TABLE `womenshoes` DISABLE KEYS */;
INSERT INTO `womenshoes` VALUES (1,3,'女鞋',176,827,NULL,'/synopsis/womenShoes/1','/images/goods/womenShoes/1.jpg','2017新款春季单鞋女士韩版细跟高跟鞋夏季百搭春天一字扣凉鞋女鞋','womenShoes'),(2,3,'女鞋',385,866,NULL,'/synopsis/womenShoes/2','/images/goods/womenShoes/2.jpg','2017新款名媛女鞋浅蓝色尖头高跟鞋女细跟优雅浅口单鞋春鞋女中跟','womenShoes'),(3,3,'女鞋',136,405,NULL,'/synopsis/womenShoes/3','/images/goods/womenShoes/3.jpg','厚底单鞋女春秋2017新款女鞋高跟百搭韩版休闲春款松糕鞋子潮春天','womenShoes'),(4,3,'女鞋',450,616,NULL,'/synopsis/womenShoes/4','/images/goods/womenShoes/4.jpg','2017春季新款细跟高跟真丝绸缎尖头水钻方扣绿色欧美浅口单鞋子女','womenShoes'),(5,3,'女鞋',189,376,NULL,'/synopsis/womenShoes/5','/images/goods/womenShoes/5.jpg','公猴春季内增高女鞋真皮小白鞋女松糕鞋休闲运动鞋厚底单鞋平底鞋','womenShoes'),(6,3,'女鞋',857,644,NULL,'/synopsis/womenShoes/6','/images/goods/womenShoes/6.jpg','单鞋浅口春季真皮女鞋防水台高跟鞋圆头粗跟鞋子职业工作鞋女黑色','womenShoes'),(7,3,'女鞋',411,644,NULL,'/synopsis/womenShoes/7','/images/goods/womenShoes/7.jpg','奇秀姿春秋新款内增高女鞋真皮休闲尖头乐福鞋女一脚蹬懒人鞋皮鞋','womenShoes'),(8,3,'女鞋',817,825,NULL,'/synopsis/womenShoes/8','/images/goods/womenShoes/8.jpg','公猴女鞋夏季跑步鞋网面运动鞋透气网鞋轻便网布鞋韩版学生休闲鞋','womenShoes'),(9,3,'女鞋',564,227,NULL,'/synopsis/womenShoes/9','/images/goods/womenShoes/9.jpg','手工制作拖鞋新款女拖鞋中跟一字拖花朵凉拖鞋女休闲外穿沙滩鞋子','womenShoes'),(10,3,'女鞋',366,940,NULL,'/synopsis/womenShoes/10','/images/goods/womenShoes/10.jpg','烫社交女鞋品牌正装尖头婚礼新娘红色羊猄羊反绒浅口中高单鞋','womenShoes');
/*!40000 ALTER TABLE `womenshoes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-02 22:08:31
