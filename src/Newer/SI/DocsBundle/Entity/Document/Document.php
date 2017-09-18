<?php

namespace Newer\SI\DocsBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/**
 * Document
 *
 * @ORM\Table(name="document_document")
 * @ORM\Entity(repositoryClass="Newer\SI\DocsBundle\Repository\Document\DocumentRepository")
 */
class Document
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
     * @ORM\Column(name="nom", type="string", length=255, unique=true)
     */
    protected $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255)
     */
    protected $titre;

    /**
     * @var int
     *
     * @ORM\Column(name="nombreSection", type="integer", nullable=true)
     */
    protected $nombreSection;
	
	/**
     * Un Groupe a plusieurs Access.
     * @ORM\OneToMany(targetEntity="Newer\SI\DocsBundle\Entity\Acteurs\Acces", mappedBy="document")
     */
	protected $access;
	
	/**
     * One Product has Many Features.
     * @ORM\OneToMany(targetEntity="Section", mappedBy="document")
     */
	protected $sections;
	
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
     * Set nom
     *
     * @param string $nom
     *
     * @return Document
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
     * Set titre
     *
     * @param string $titre
     *
     * @return Document
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set nombreSection
     *
     * @param integer $nombreSection
     *
     * @return Document
     */
    public function setNombreSection($nombreSection)
    {
        $this->nombreSection = $nombreSection;

        return $this;
    }

    /**
     * Get nombreSection
     *
     * @return int
     */
    public function getNombreSection()
    {
        return $this->nombreSection;
    }
}

