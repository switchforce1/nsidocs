<?php

namespace AppBundle\Entity\Document;

use Doctrine\ORM\Mapping as ORM;

/**
 * Creation
 *
 * @ORM\Table(name="document_creation")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Document\CreationRepository")
 */
class Creation
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
     * @var \DateTime
     *
     * @ORM\Column(name="dateCreation", type="datetime")
     */
    protected $dateCreation;

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
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set dateCreation
     *
     * @param \DateTime $dateCreation
     *
     * @return Creation
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
	 * 
	 * @return type
	 */
	public function getDocument() 
	{
		return $this->document;
	}

	/**
	 * 
	 * @return type
	 */
	public function getEmploye() 
	{
		return $this->employe;
	}

	/**
	 * 
	 * @param type $document
	 * @return \AppBundle\Entity\Document\Creation
	 */
	public function setDocument($document) 
	{
		$this->document = $document;
		return $this;
	}

	/**
	 * 
	 * @param type $employe
	 * @return \AppBundle\Entity\Document\Creation
	 */
	public function setEmploye($employe) 
	{
		$this->employe = $employe;
		return $this;
	}


}

