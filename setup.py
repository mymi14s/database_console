from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in database_console/__init__.py
from database_console import __version__ as version

setup(
	name="database_console",
	version=version,
	description="Execute SQL queries directly from Frappe/ERPNExt desk",
	author="Anthony Emmanuel",
	author_email="mymi14s@hotmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
