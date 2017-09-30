<?php

namespace AppBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Groupe
 *
 * @ORM\Table(name="acteurs_groupe")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Acteurs\GroupeRepository")
 */
class Groupe
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
     * @ORM\Column(name="nom", type="string", length=150, unique=true)
     */
    protected $nom;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateCreation", type="datetime")
     */
    protected $dateCreation;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    protected $description;

	/**
     * Un TypeUtilisateur a plusieurs utilisateurs.
     * @ORM\OneToMany(targetEntity="Attribution", mappedBy="groupe")
     */
	protected $attributions;

	/**
     * Un Groupe a plusieurs Access.
     * @ORM\OneToMany(targetEntity="Acces", mappedBy="groupe")
     */
	protected $access;

	public function __construct() 
	{
		$this->personnes = new ArrayCollection();
		$this->access = new ArrayCollection();
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
     * Set nom
     *
     * @param string $nom
     *
     * @return Groupe
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set dateCreation
     *
     * @param \DateTime $dateCreation
     *
     * @return Groupe
     */
    public function setDateCreation($dateCreation)
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    /**
     * Get dateCreation
     *
     * @return \DateTime
     */
    public function getDateCreation()
    {
        return $this->dateCreation;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Groupe
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
	public function getPersonnes() 
	{
		return $this->personnes;
	}

	/**
	 * 
	 * @param type $personnes
	 */
	public function setPersonnes($personnes) 
	{
		$this->personnes = $personnes;
	}

}

