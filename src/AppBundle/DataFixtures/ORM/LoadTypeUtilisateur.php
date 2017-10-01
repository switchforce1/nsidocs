<?php

namespace AppBundle\DataFixtures\ORM\Security;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Acteurs\TypeUtilisateur;

class LoadTypeUtilisateur extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * Loading fixtures.
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // 
        $invite = new TypeUtilisateur();
        $invite->setLibelle("Invité")
            ->setDescription("Utilisateur n'étant ni directeur "
                . "ni membre du service informatiqe");
        $manager->persist($invite);
        
        $directeur = new TypeUtilisateur();
        $directeur->setLibelle("Directeur")
            ->setDescription("Directeur de l'entreprise, "
                . "ayant le droit de consulter absolument tous les document");
        $manager->persist($directeur);
        
        $informaticien = new TypeUtilisateur();
        $informaticien->setLibelle("Informaticien")
            ->setDescription("Utilisateur membre du service informatiqe");
        $manager->persist($informaticien);
        
        $responsableInformatique = new TypeUtilisateur();
        $responsableInformatique->setLibelle("Responsable Informatique")
            ->setDescription("Utilisateur membre du service informatique"
                . " ayant absolument tous les droit sur les documents");
        $manager->persist($responsableInformatique);
        
        $administrateur = new TypeUtilisateur();
        $administrateur->setLibelle("Administrateur")
            ->setDescription("Administrateur générale de la plateforme,"
                . " avec tous les droit absolus");
        $manager->persist($informaticien);
        // Enregistrement
        //$manager->persist($_DGnanzim);

        // Lancement des écritures
        $manager->flush();
    }

    /**
     * Returns the order of this fixture.
     *
     * @return int
     */
    public function getOrder()
    {
        return 1;
    }
}
