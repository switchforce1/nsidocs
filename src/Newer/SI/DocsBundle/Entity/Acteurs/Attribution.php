<?php

namespace Newer\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;

/**
 * Attribution
 *
 * @ORM\Table(name="acteurs_attribution")
 * @ORM\Entity(repositoryClass="Newer\SI\DocsBundle\Repository\Acteurs\AttributionRepository")
 */
class Attribution
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
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="Groupe", inversedBy="attribution")
     * @ORM\JoinColumn(name="groupe_id", referencedColumnName="id")
     */
	protected $groupe;
	
	/**
     * Many Utilisateur have One TypeUtilisateur.
     * @ORM\ManyToOne(targetEntity="Personne", inversedBy="attribution")
     * @ORM\JoinColumn(name="personne_id", referencedColumnName="id")
     */
	protected $personne;

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
     * @return Attribution
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
}

