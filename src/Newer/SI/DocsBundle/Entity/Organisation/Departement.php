<?php

namespace Newer\SI\DocsBundle\Entity\Organisation;

use Doctrine\ORM\Mapping as ORM;

/**
 * Departement
 *
 * @ORM\Table(name="organisation_departement")
 * @ORM\Entity(repositoryClass="Newer\SI\DocsBundle\Repository\Organisation\DepartementRepository")
 */
class Departement
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
     * @ORM\Column(name="libelle", type="string", length=255, unique=true)
     */
    protected $libelle;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    protected $description;
	
	/**
     * One Departement has Many Employes.
     * @ORM\OneToMany(targetEntity="Employe", mappedBy="departement")
     */
	protected $employes;


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
     * @return Departement
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
     * Set description
     *
     * @param string $description
     *
     * @return Departement
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
	public function getEmployes() 
	{
		return $this->employes;
	}

	/**
	 * 
	 * @param Employe $employes
	 * @return \Newer\SI\DocsBundle\Entity\Organisation\Departement
	 */
	public function setEmployes($employes) 
	{
		$this->employes = $employes;
		return $this;
	}


}

