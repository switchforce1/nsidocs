<?php

namespace AppBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;

/**
 * TypeAcces
 *
 * @ORM\Table(name="acteurs_type_acces")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Acteurs\TypeAccesRepository")
 */
class TypeAcces
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
     * @ORM\Column(name="libelle", type="string", length=200, unique=true)
     */
    protected $libelle;
    
    /**
     * @var string
     *
     * @ORM\Column(name="etiquete", type="string", length=10, unique=true)
     */
    protected $etiquete;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    protected $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateCreation", type="datetime")
     */
    protected $dateCreation;

	/**
     * Un Groupe a plusieurs Access.
     * @ORM\OneToMany(targetEntity="Acces", mappedBy="typeAcces")
     */
	protected $access;
	
	public function __construct() 
	{
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
     * Set libelle
     *
     * @param string $libelle
     *
     * @return TypeAcces
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
     * 
     * @param type $etiquete
     * @return $this
     */
    public function setEtiquete($etiquete)
    {
        $this->etiquete = $etiquete;
        return $this;
    }
    
    /**
     * 
     * @return type
     */
    public function getEtiquete()
    {
        return $this->etiquete;
    }

    /**
     * 
     * @param type $access
     * @return $this
     */
    public function setAccess($access)
    {
        $this->access = $access;
        return $this;
    }

    /**
     * 
     * @return type
     */
    public function getAccess()
    {
        return $this->access;
    }
    
    /**
     * Set description
     *
     * @param string $description
     *
     * @return TypeAcces
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
     * Set dateCreation
     *
     * @param \DateTime $dateCreation
     *
     * @return TypeAcces
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
}

