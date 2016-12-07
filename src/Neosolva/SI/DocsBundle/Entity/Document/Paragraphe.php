<?php

namespace Neosolva\SI\DocsBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/**
 * Paragraphe
 *
 * @ORM\Table(name="document_paragraphe")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Document\ParagrapheRepository")
 */
class Paragraphe extends Element
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
     * @ORM\Column(name="contenue", type="text")
     */
    protected $contenue;


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
     * Set contenue
     *
     * @param string $contenue
     *
     * @return Paragraphe
     */
    public function setContenue($contenue)
    {
        $this->contenue = $contenue;

        return $this;
    }

    /**
     * Get contenue
     *
     * @return string
     */
    public function getContenue()
    {
        return $this->contenue;
    }
}

