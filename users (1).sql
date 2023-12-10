-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 08:21 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signupdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(5, 'gadarsh747@gmail.com', 'gadarsh747@gmail.com', '$2b$10$RT7M9aI70tlxOESjR7aXRuAYdhlN4Fya2MlVheKr4pHclnFXsbbde'),
(6, 'dasdad', 'adarsh@gmail.com', '$2b$10$JaKVDXps1EZIwXv0laykh.kXuqj6gbGn1AK/LhnzuPdnPOGKFW7ZO'),
(7, 'dasdad', 'gadarsh@gmail.com', '$2b$16$2OqFddf4E3TTe.V4qZeRDu0fFrzw5xEEcBnKBJA.wjOQ7TFKHpFeW'),
(8, 'dasdad', 'hector@gmail.com', '$2b$16$llcqtGMXfyI0fxNV33ivLeGYoCfDfBKyObV1rvOqsFyZvCbLtwf2m'),
(9, 'adarsh', 'adarsh1@gmail.com', '$2b$16$lpBytFZ7wD1T0ZAn9wycCuF0PXXCim7D3qGMsWffMhBQFLHtxeL2W');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
