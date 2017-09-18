<?php

namespace Newer\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;
use \Doctrine\Common\Collections\ArrayCollection;

/**
 * TypeUtilisateur
 *
 * @ORM\Table(name="acteurs_type_utilisateur")
 * @ORM\Entity(repositoryClass="Newer\SI\DocsBundle\Repository\Acteurs\TypeUtilisateurRepository")
 */
class TypeUtilisateur
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
     * @ORM\Column(name="libelle", type="string", length=150, unique=true)
     */
    protected $libelle;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    protected $description;

	/**
     * Un TypeUtilisateur a plusieurs utilisateurs.
     * @ORM\OneToMany(targetEntity="Utilisateur", mappedBy="typeUtilisateur")
     */
	protected $utilisateurs;

	public function __construct()
	{
		$this->utilisateurs = new ArrayCollection();
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
     * Set libelle
     *
     * @param string $libelle
     *
     * @return TypeUtilisateur
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * Get libelle
     *
     * @return string
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return TypeUtilisateur
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }
	
	/**
	 * 
	 * @return type
	 */
	function getUtilisateurs() 
	{
		return $this->utilisateurs;
	}

	/**
	 * 
	 * @param type $utilisateurs
	 */
	function setUtilisateurs($utilisateurs) 
	{
		$this->utilisateurs = $utilisateurs;
	}

}

