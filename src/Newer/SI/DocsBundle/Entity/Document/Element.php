<?php

namespace Newer\SI\DocsBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/** 
 * Element
 * @ORM\MappedSuperclass 
 */
class Element
{
    /**
     * @var int
     *
     * @ORM\Column(name="numero", type="integer")
     */
    protected $numero;

    /**
     * @var string
     *
     * @ORM\Column(name="libelle", type="string", length=255, nullable=true)
     */
    protected $libelle;

    /**
     * @var int
     *
     * @ORM\Column(name="position", type="integer", nullable=true)
     */
    protected $position;
	
	/**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Section", inversedBy="elements")
     * @ORM\JoinColumn(name="section_id", referencedColumnName="id")
     */
	protected $section;


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
     * Set numero
     *
     * @param integer $numero
     *
     * @return Element
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get numero
     *
     * @return int
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     *
     * @return Element
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
     * Set position
     *
     * @param integer $position
     *
     * @return Element
     */
    public function setPosition($position)
    {
        $this->position = $position;

        return $this;
    }

    /**
     * Get position
     *
     * @return int
     */
    public function getPosition()
    {
        return $this->position;
    }
	
	/**
	 * 
	 * @return type
	 */
	public function getSection() 
	{
		return $this->section;
	}

	/**
	 * 
	 * @param Section $section
	 */
	public function setSection($section) 
	{
		$this->section = $section;
	}


}

