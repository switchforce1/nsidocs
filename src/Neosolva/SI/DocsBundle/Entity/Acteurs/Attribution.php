<?php

namespace Neosolva\SI\DocsBundle\Entity\Acteurs;

use Doctrine\ORM\Mapping as ORM;

/**
 * Attribution
 *
 * @ORM\Table(name="acteurs_attribution")
 * @ORM\Entity(repositoryClass="Neosolva\SI\DocsBundle\Repository\Acteurs\AttributionRepository")
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
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateAttribution", type="datetime", nullable=true)
     */
    private $dateAttribution;


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

