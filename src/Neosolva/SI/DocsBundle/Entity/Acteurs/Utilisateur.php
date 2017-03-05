<?php

namespace Neosolva\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * Utilisateur
 *
 * @ORM\Table(name="acteurs_utilisateur")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Acteurs\UtilisateurRepository")
 */
class Utilisateur extends BaseUser
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

	 public function __construct()
    {
        parent::__construct();
        // your own logic
		$this->etat = FALSE;
    }
	
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

