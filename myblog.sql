-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2018 at 04:45 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `about` longtext,
  `link` text NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`id`, `title`, `date`, `location`, `about`, `link`, `img1`, `img2`) VALUES
(20, 'Friday morning in Raigad ', '2018-03-02', 'Raigad', 'That was awesome trip.', 'https://photos.app.goo.gl/z9ySkXhiwQyi8hZt2', 'https://lh3.googleusercontent.com/Dt9EHhmem2-KkACFpjJYmvJTQnEOCffClNgBjKODRNpHEztBLuaWSwFegtFQdE9JZN4sh40DzAZFzOtcdL3L0I2Srqhfw3XEYXEnWGyqsdblJiTQssN2gK0gmV_L_jhh_khEVD0G_fU=w600-h315-p-k', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
