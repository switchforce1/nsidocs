<?php

namespace Neosolva\SI\DocsBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Section
 *
 * @ORM\Table(name="document_section")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Document\SectionRepository")
 */
class Section
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
     * @ORM\Column(name="numero", type="string", length=255, nullable=true)
     */
    protected $numero;

    /**
     * @var string
     *
     * @ORM\Column(name="libelle", type="string", length=255)
     */
    protected $libelle;
	
	/**
     * One Category has Many Categories.
     * @ORM\OneToMany(targetEntity="Section", mappedBy="parent")
     */
    private $enfants;

    /**
     * Many Categories have One Category.
     * @ORM\ManyToOne(targetEntity="Section", inversedBy="enfants")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    private $parent;
	
	/**
     * One Product has Many Features.
     * @ORM\OneToMany(targetEntity="Element", mappedBy="section")
     */
	protected $elements;
	
	/**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Document", inversedBy="sections")
     * @ORM\JoinColumn(name="document_id", referencedColumnName="id")
     */
    private $document;

	public function __construct()
	{
		$this->elements = new ArrayCollection();
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
     * Set numero
     *
     * @param string $numero
     *
     * @return Section
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get numero
     *
     * @return string
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
     * @return Section
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
	 * @return ArrayCollection
	 */
	public function getElements() 
	{
		return $this->elements;
	}

	/**
	 * 
	 * @param ArrayCollection $elements
	 */
	public function setElements($elements) 
	{
		$this->elements = $elements;
	}
	
	/**
	 * 
	 * @return type
	 */
	public function getChildren() 
	{
		return $this->enfants;
	}

	/**
	 * 
	 * @return type
	 */
	public function getParent() 
	{
		return $this->parent;
	}

	/**
	 * 
	 * @param type $enfants
	 */
	public function setChildren($enfants) 
	{
		$this->enfants = $enfants;
	}

	/**
	 * 
	 * @param type $parent
	 */
	public function setParent($parent) 
	{
		$this->parent = $parent;
	}

	/**
	 * 
	 * @return type
	 */
	public function getEnfants() 
	{
		return $this->enfants;
	}

	/**
	 * 
	 * @return type
	 */
	public function getDocument() 
	{
		return $this->document;
	}
	
	/**
	 * 
	 * @param type $enfants
	 */
	public function setEnfants($enfants) 
	{
		$this->enfants = $enfants;
	}

	/**
	 * 
	 * @param type $document
	 */
	public function setDocument($document) 
	{
		$this->document = $document;
	}



}

