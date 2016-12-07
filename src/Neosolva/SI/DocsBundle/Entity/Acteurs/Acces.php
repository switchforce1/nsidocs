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
     * @return bool
     */
    public function getActif()
    {
        return $this->actif;
    }
}

