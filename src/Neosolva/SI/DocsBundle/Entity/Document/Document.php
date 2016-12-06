<?php

namespace Neosolva\SI\DocsBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/**
 * Document
 *
 * @ORM\Table(name="document_document")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Document\DocumentRepository")
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
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, unique=true)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255)
     */
    private $titre;

    /**
     * @var int
     *
     * @ORM\Column(name="nombreSection", type="integer", nullable=true)
     */
    private $nombreSection;


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

