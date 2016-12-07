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
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=100, unique=true)
     */
    protected $login;

    /**
     * @var string
     *
     * @ORM\Column(name="motDePass", type="string", length=255)
     */
    protected $motDePass;

    /**
     * @var bool
     *
     * @ORM\Column(name="etat", type="boolean")
     */
    protected $etat;

	/**
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="TypeUtilisateur", inversedBy="utilisateurs")
     * @ORM\JoinColumn(name="utilisateur_id", referencedColumnName="id")
     */
	protected $typeUtilisateur;
	
	/**
     * Un utilisater correspond a une personne.
     * @ORM\OneToOne(targetEntity="Personne", mappedBy="utilisateur")
     */
	protected $personne;

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
	
	/**
	 * 
	 * @return type
	 */
	public function getTypeUtilisateur()
	{
		return $this->typeUtilisateur;
	}
	
	/**
	 * 
	 * @param type $typeUtilisateur
	 */
	public function setTypeUtilisateur($typeUtilisateur)
	{
		$this->typeUtilisateur = $typeUtilisateur;
	}


}

