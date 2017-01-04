<?php

namespace Neosolva\SI\DocsBundle\Entity\Organisation;

use Doctrine\ORM\Mapping as ORM;

/**
 * Employe
 *
 * @ORM\Table(name="organisation_employe")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Organisation\EmployeRepository")
 */
class Employe
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
     * @ORM\Column(name="poste", type="string", length=255)
     */
    protected $poste;
	
	/**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Departement", inversedBy="employes")
     * @ORM\JoinColumn(name="departement_id", referencedColumnName="id")
     */
    protected $departement;

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
     * Set poste
     *
     * @param string $poste
     *
     * @return Employe
     */
    public function setPoste($poste)
    {
        $this->poste = $poste;

        return $this;
    }

    /**
     * Get poste
     *
     * @return string
     */
    public function getPoste()
    {
        return $this->poste;
    }
	
	/**
	 * 
	 * @return type
	 */
	public function getDepartement() 
	{
		return $this->departement;
	}

	/**
	 * 
	 * @param type $departement
	 * @return \Neosolva\SI\DocsBundle\Entity\Organisation\Employe
	 */
	public function setDepartement($departement) 
	{
		$this->departement = $departement;
		return $this;
	}


}

