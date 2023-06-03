-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Време на генериране:  2 юни 2023 в 23:11
-- Версия на сървъра: 10.4.27-MariaDB
-- Версия на PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данни: `datawing`
--

-- --------------------------------------------------------

--
-- Структура на таблица `deliveryreq`
--

CREATE TABLE `deliveryreq` (
  `dlv_id` int(11) NOT NULL,
  `dlv_name` varchar(100) NOT NULL,
  `dlv_email` varchar(100) NOT NULL,
  `dlv_addrobl` varchar(100) NOT NULL,
  `dlv_addrobsht` varchar(100) NOT NULL,
  `dlv_address` varchar(100) NOT NULL,
  `dlv_phone` varchar(100) NOT NULL,
  `dlv_date` varchar(10) NOT NULL,
  `dlv_courier` varchar(100) NOT NULL,
  `dlv_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `deliveryreq`
--

INSERT INTO `deliveryreq` (`dlv_id`, `dlv_name`, `dlv_email`, `dlv_addrobl`, `dlv_addrobsht`, `dlv_address`, `dlv_phone`, `dlv_date`, `dlv_courier`, `dlv_status`) VALUES
(1, 'Ivan Ivanov', 'ivan@abv.bg', 'Варна', 'Каварна', 'Крайбрежна 17', '359888888888', '2023-05-27', 'Асен Асенов', 'приета'),
(2, 'Яким Якимов', 'doncho@abv.bg', 'Пазарджик', 'Белово', 'Весалка 25', '359876567895', '2023-06-02', 'Асен Асенов', 'приета'),
(3, 'Петър Петров', 'petar@abv.bg', 'Благоевград', 'Благоевград', 'Вратеново 15', '359899999999', '2023-05-29', 'Асен Асенов', 'отказана'),
(4, 'Георги Петров', 'gogo@abv.bg', 'Пловдив', 'Пловдив', 'Ropotamo 13', '359876567895', '2023-05-30', 'куриер', 'необработена'),
(19, 'Иван Иванов', 'petar@abv.bg', 'Пловдив', 'Брезово', 'Вратеново 15', '359899999999', '2023-06-02', 'куриер', 'необработена'),
(20, 'Андрей Андреев', 'gogo@abv.bg', 'Ловеч', 'Тетевен', 'Ropotamo 13', '359876567895', '2023-06-02', 'куриер', 'необработена'),
(23, 'Асен Асенов', 'ivailo@abv.bg', 'Пловдив', 'Карлово', 'Поляна 15', '359888999999', '2023-06-15', 'куриер', 'необработена'),
(24, 'Ангел Ангелов', 'angel@abv.bg', 'Смолян', 'Чепеларе', 'Орлин 35', '359888888888', '2023-06-09', 'куриер', 'необработена'),
(25, 'Антон Антонов', 'anton@abv.bg', 'Благоевград', 'Петрич', 'Люляк 15', '359888888888', '2023-06-02', 'куриер', 'необработена'),
(26, 'Явор Яворов', 'yavor@abv.bg', 'Бургас', 'Созопол', 'Крайбрежна 17', '359888888888', '2023-06-29', 'куриер', 'необработена');

-- --------------------------------------------------------

--
-- Структура на таблица `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'admin'),
(2, 'commonuser');

-- --------------------------------------------------------

--
-- Структура на таблица `user`
--

CREATE TABLE `user` (
  `us_id` int(11) NOT NULL,
  `us_name` varchar(100) NOT NULL,
  `us_nickname` varchar(50) NOT NULL,
  `us_password` varchar(50) NOT NULL,
  `us_roleid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `user`
--

INSERT INTO `user` (`us_id`, `us_name`, `us_nickname`, `us_password`, `us_roleid`) VALUES
(1, 'Асен Асенов', 'asen', 'asenasen', 1),
(2, 'Иван Асенов', 'ivo', 'ivoivo', 1),
(4, 'Борис Борисов', 'boro', 'boroboro', 2),
(18, 'Petar Ptrov', 'petar', 'petarpetar', 2),
(21, 'Стоян Стоянов', 'stoyan', 'stosto', 1);

--
-- Indexes for dumped tables
--

--
-- Индекси за таблица `deliveryreq`
--
ALTER TABLE `deliveryreq`
  ADD PRIMARY KEY (`dlv_id`);

--
-- Индекси за таблица `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `usrole_name` (`role_name`);

--
-- Индекси за таблица `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`us_id`),
  ADD KEY `fk_userrole_user` (`us_roleid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deliveryreq`
--
ALTER TABLE `deliveryreq`
  MODIFY `dlv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Ограничения за дъмпнати таблици
--

--
-- Ограничения за таблица `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_userrole_user` FOREIGN KEY (`us_roleid`) REFERENCES `role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
