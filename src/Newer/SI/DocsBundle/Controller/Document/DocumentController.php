<?php

namespace Newer\SI\DocsBundle\Controller\Document;

use Newer\SI\DocsBundle\Entity\Document\Document;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Document controller.
 *
 * @Route("document_document")
 */
class DocumentController extends Controller
{
    /**
     * Lists all document entities.
     *
     * @Route("/", name="document_document_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $documents = $em->getRepository('NSIDocsBundle:Document\Document')->findAll();

        return $this->render('document/document/index.html.twig', array(
            'documents' => $documents,
        ));
    }

    /**
     * Finds and displays a document entity.
     *
     * @Route("/{id}", name="document_document_show")
     * @Method("GET")
     */
    public function showAction(Document $document)
    {

        return $this->render('document/document/show.html.twig', array(
            'document' => $document,
        ));
    }
}
