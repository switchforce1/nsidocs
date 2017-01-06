<?php

namespace Neosolva\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;

/**
 * Acces
 *
 * @ORM\Table(name="acteurs_acces")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Acteurs\AccesRepository")
 */
class Acces
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
     * @ORM\Column(name="dateAttribution", type="datetime", nullable=true)
     */
    protected $dateAttribution;

    /**
     * @var bool
     *
     * @ORM\Column(name="actif", type="boolean")
     */
    protected $actif;
	
	/**
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="Groupe", inversedBy="acess")
     * @ORM\JoinColumn(name="groupe_id", referencedColumnName="id")
     */
	protected $groupe;
	
	/**
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="TypeAcces", inversedBy="acess")
     * @ORM\JoinColumn(name="type_acces_id", referencedColumnName="id")
     */
	protected $typeUAcces;
	
	/**
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="Neosolva\SI\DocsBundle\Entity\Document\Document",
	 *					 inversedBy="acess")
     * @ORM\JoinColumn(name="document_id", referencedColumnName="id")
     */
	protected $document;

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
     * Set dateAttribution
     *
     * @param \DateTime $dateAttribution
     *
     * @return Acces
     */
    public function setDateAttribution($dateAttribution)
    {
        $this->dateAttribution = $dateAttribution;

        return $this;
    }

    /**
     * Get dateAttribution
     *
     * @return \DateTime
     */
    public function getDateAttribution()
    {
        return $this->dateAttribution;
    }

    /**
     * Set actif
     *
     * @param boolean $actif
     *
     * @return Acces
     */
    public function setActif($actif)
    {
        $this->actif = $actif;

        return $this;
    }

    /**
     * Get actif
     *
     * @return boolean
     */
    public function getActif()
    {
        return $this->actif;
    }
	
	/**
	 * 
	 * @return type
	 */
	public function getGroupe() 
	{
		return $this->groupe;
	}

	/**
	 * 
	 * @return type
	 */
	public function getTypeUAcces() 
	{
		return $this->typeUAcces;
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
	 * @param type $groupe
	 */
	public function setGroupe($groupe) 
	{
		$this->groupe = $groupe;
	}

	/**
	 * 
	 * @param type $typeUAcces
	 */
	public function setTypeUAcces($typeUAcces) 
	{
		$this->typeUAcces = $typeUAcces;
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

