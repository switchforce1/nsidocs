<?php

namespace Neosolva\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;

/**
 * Utilisateur
 *
 * @ORM\Table(name="acteurs_utilisateur")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Acteurs\UtilisateurRepository")
 */
class Utilisateur
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=100, unique=true)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="motDePass", type="string", length=255)
     */
    private $motDePass;

    /**
     * @var bool
     *
     * @ORM\Column(name="etat", type="boolean")
     */
    private $etat;

    /**
     * @var \stdClass
     *
     * @ORM\Column(name="personne", type="object")
     */
    private $personne;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set login
     *
     * @param string $login
     *
     * @return Utilisateur
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set motDePass
     *
     * @param string $motDePass
     *
     * @return Utilisateur
     */
    public function setMotDePass($motDePass)
    {
        $this->motDePass = $motDePass;

        return $this;
    }

    /**
     * Get motDePass
     *
     * @return string
     */
    public function getMotDePass()
    {
        return $this->motDePass;
    }

    /**
     * Set etat
     *
     * @param boolean $etat
     *
     * @return Utilisateur
     */
    public function setEtat($etat)
    {
        $this->etat = $etat;

        return $this;
    }

    /**
     * Get etat
     *
     * @return bool
     */
    public function getEtat()
    {
        return $this->etat;
    }

    /**
     * Set personne
     *
     * @param \stdClass $personne
     *
     * @return Utilisateur
     */
    public function setPersonne($personne)
    {
        $this->personne = $personne;

        return $this;
    }

    /**
     * Get personne
     *
     * @return \stdClass
     */
    public function getPersonne()
    {
        return $this->personne;
    }
}

