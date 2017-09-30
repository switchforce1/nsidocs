
#!/bin/bash

echo "\033[33;1m"
echo Application des autorisations...
echo "\033[0m"
sudo setfacl -R -m u:www-data:rwX -m u:`whoami`:rwX app/cache app/logs app/sessions
sudo setfacl -dR -m u:www-data:rwX -m u:`whoami`:rwX app/cache app/logs app/sessions

#echo "Creation des dossier de montage"

echo "\033[33;1m"
echo Suppression de la base de donnees...
echo "\033[0m"
php app/console d:d:d --force

echo "\033[33;1m"
echo Creation de la base de donnees...
echo "\033[0m"
php app/console d:d:c

#echo "\033[33;1m"
#echo Generation des entites via Doctrine...
#echo "\033[0m"
#php bin/console d:g:entities Neosolva --no-backup

echo "\033[33;1m"
echo Creation des tables...
echo "\033[0m"
php app/console d:s:u --force

echo "\033[33;1m"
echo Hydratation des donnees initiales...
echo "\033[0m"
php app/console d:f:l

echo "\033[33;1m"
echo Nettoyage du cache...
echo "\033[0m"
php app/console c:c

echo "\033[33;1m"
echo Done.
echo "\033[0m"