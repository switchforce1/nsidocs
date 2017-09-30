<?php

namespace AppBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/**
 * Proposition
 *
 * @ORM\Table(name="document_proposition")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Document\PropositionRepository")
 */
class Proposition
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
     * @ORM\Column(name="motif", type="string", length=255)
     */
    protected $motif;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    protected $description;

	/**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Document", inversedBy="sections")
     * @ORM\JoinColumn(name="document_id", referencedColumnName="id")
     */
    protected $document;
	
	/**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Organisation\Employe",
	 *						 inversedBy="creations")
     * @ORM\JoinColumn(name="employe_id", referencedColumnName="id")
     */
    protected $employe;
	
    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set motif
     *
     * @param string $motif
     *
     * @return Proposition
     */
    public function setMotif($motif)
    {
        $this->motif = $motif;

        return $this;
    }

    /**
     * Get motif
     *
     * @return string
     */
    public function getMotif()
    {
        return $this->motif;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Proposition
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
	
	public function getDocument() 
	{
		return $this->document;
	}

	public function getEmploye() 
	{
		return $this->employe;
	}

	public function setDocument($document) 
	{
		$this->document = $document;
		return $this;
	}

	public function setEmploye($employe) 
	{
		$this->employe = $employe;
		return $this;
	}


}

