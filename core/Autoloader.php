<?php

	namespace Core;

	class Autoloader {
		public function __construct() {
			echo 'autoloader';
		}

		/*
		 * Registers class to autoload
		 */
		static function register() {
			spl_autoload_register(array(__CLASS__, 'autoload'));
		}

		/*
		 * Autoloads class
		 */
		static function autoload($class) {
			if (strpos($class, __NAMESPACE__.'\\') === 0) {
				$class = str_replace(__NAMESPACE__.'\\', '', $class);
				$class = str_replace('\\', '/', $class);
				require __DIR__.'/'.$class.'.php';
			}
		}
	}