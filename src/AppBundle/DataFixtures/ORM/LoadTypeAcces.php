<?php

namespace AppBundle\DataFixtures\ORM\Security;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Acteurs\TypeAcces;
use AppBundle\Model\TypeAccesModel;

class LoadTypeAcces extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * Loading fixtures.
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // Super - Admin
        $visibilite = new TypeAcces();
        $visibilite->setDateCreation(new \DateTime('now'))
            ->setEtiquete(TypeAccesModel::ACCES_VISIBILITE)
            ->setLibelle("Visibilité")
            ->setDescription("Permet de dertiner si le document apparait dans la liste ou pas");
        // Enregistrement
        $manager->persist($visibilite);

        $consultation = new TypeAcces();
        $consultation->setDateCreation(new \DateTime('now'))
            ->setEtiquete(TypeAccesModel::ACCES_CONSULTATION)
            ->setLibelle('Consultation')
            ->setDescription("Permet d'ouvrir le document et de voir tous les éléments");        
        // Enregistrement
        $manager->persist($consultation);

        $modification = new TypeAcces();
        $modification->setDateCreation(new \DateTime('now'))
            ->setEtiquete(TypeAccesModel::ACCES_MODIFICATION)
            ->setLibelle('Modification')
            ->setDescription("Permet d'apporter des modifications au document."
                . "Sans passer par un commentaire");
        // Enregistrement
        $manager->persist($modification);

        $partage = new TypeAcces();
        $partage->setDateCreation(new \DateTime('now'))
            ->setEtiquete(TypeAccesModel::ACCES_PARTAGE)
            ->setLibelle('Partage')
            ->setDescription("permet de partage un document ");
        // Enregistrement
        $manager->persist($partage);

        $controle = new TypeAcces();
        $controle->setDateCreation(new \DateTime('now'))
            ->setEtiquete(TypeAccesModel::ACCES_CONTROLE)
            ->setLibelle('Controle')
            ->setDescription("Permet d'avoir le controle totale sur un document");
        // Enregistrement
        $manager->persist($controle);

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
        return 3;
    }
}
