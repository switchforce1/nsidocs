<?php

namespace AppBundle\DataFixtures\ORM\Security;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Acteurs\User;

class LoadTheme extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * Loading fixtures.
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // Super - Admin
        $_DGnanzim = new User();
        $_DGnanzim->setEnabled(true);
        $_DGnanzim->setUsername('dgnanzim');
        $_DGnanzim->setPlainPassword('Agr92!');
        $_DGnanzim->setEmail('dgnanzim@agrege.com');
        // Enregistrement
        $manager->persist($_DGnanzim);

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
        return 4;
    }
}
