<?php

namespace Neosolva\SI\DocsBundle\Controller\Document;

use Neosolva\SI\DocsBundle\Entity\Document\Paragraphe;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Paragraphe controller.
 *
 * @Route("document_paragraphe")
 */
class ParagrapheController extends Controller
{
    /**
     * Lists all paragraphe entities.
     *
     * @Route("/", name="document_paragraphe_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $paragraphes = $em->getRepository('NSIDocsBundle:Document\Paragraphe')->findAll();

        return $this->render('document/paragraphe/index.html.twig', array(
            'paragraphes' => $paragraphes,
        ));
    }

    /**
     * Creates a new paragraphe entity.
     *
     * @Route("/new", name="document_paragraphe_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $paragraphe = new Paragraphe();
        $form = $this->createForm('Neosolva\SI\DocsBundle\Form\Document\ParagrapheType', $paragraphe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($paragraphe);
            $em->flush($paragraphe);

            return $this->redirectToRoute('document_paragraphe_show', array('id' => $paragraphe->getId()));
        }

        return $this->render('document/paragraphe/new.html.twig', array(
            'paragraphe' => $paragraphe,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a paragraphe entity.
     *
     * @Route("/{id}", name="document_paragraphe_show")
     * @Method("GET")
     */
    public function showAction(Paragraphe $paragraphe)
    {
        $deleteForm = $this->createDeleteForm($paragraphe);

        return $this->render('document/paragraphe/show.html.twig', array(
            'paragraphe' => $paragraphe,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing paragraphe entity.
     *
     * @Route("/{id}/edit", name="document_paragraphe_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Paragraphe $paragraphe)
    {
        $deleteForm = $this->createDeleteForm($paragraphe);
        $editForm = $this->createForm('Neosolva\SI\DocsBundle\Form\Document\ParagrapheType', $paragraphe);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_paragraphe_edit', array('id' => $paragraphe->getId()));
        }

        return $this->render('document/paragraphe/edit.html.twig', array(
            'paragraphe' => $paragraphe,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a paragraphe entity.
     *
     * @Route("/{id}", name="document_paragraphe_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Paragraphe $paragraphe)
    {
        $form = $this->createDeleteForm($paragraphe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($paragraphe);
            $em->flush($paragraphe);
        }

        return $this->redirectToRoute('document_paragraphe_index');
    }

    /**
     * Creates a form to delete a paragraphe entity.
     *
     * @param Paragraphe $paragraphe The paragraphe entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Paragraphe $paragraphe)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_paragraphe_delete', array('id' => $paragraphe->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
