<?php

namespace Newer\SI\DocsBundle\Controller\Document;

use Newer\SI\DocsBundle\Entity\Document\Element;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Element controller.
 *
 * @Route("document_element")
 */
class ElementController extends Controller
{
    /**
     * Lists all element entities.
     *
     * @Route("/", name="document_element_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $elements = $em->getRepository('NSIDocsBundle:Document\Element')->findAll();

        return $this->render('document/element/index.html.twig', array(
            'elements' => $elements,
        ));
    }

    /**
     * Creates a new element entity.
     *
     * @Route("/new", name="document_element_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $element = new Element();
        $form = $this->createForm('Newer\SI\DocsBundle\Form\Document\ElementType', $element);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($element);
            $em->flush($element);

            return $this->redirectToRoute('document_element_show', array('id' => $element->getId()));
        }

        return $this->render('document/element/new.html.twig', array(
            'element' => $element,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a element entity.
     *
     * @Route("/{id}", name="document_element_show")
     * @Method("GET")
     */
    public function showAction(Element $element)
    {
        $deleteForm = $this->createDeleteForm($element);

        return $this->render('document/element/show.html.twig', array(
            'element' => $element,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing element entity.
     *
     * @Route("/{id}/edit", name="document_element_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Element $element)
    {
        $deleteForm = $this->createDeleteForm($element);
        $editForm = $this->createForm('Newer\SI\DocsBundle\Form\Document\ElementType', $element);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_element_edit', array('id' => $element->getId()));
        }

        return $this->render('document/element/edit.html.twig', array(
            'element' => $element,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a element entity.
     *
     * @Route("/{id}", name="document_element_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Element $element)
    {
        $form = $this->createDeleteForm($element);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($element);
            $em->flush($element);
        }

        return $this->redirectToRoute('document_element_index');
    }

    /**
     * Creates a form to delete a element entity.
     *
     * @param Element $element The element entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Element $element)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_element_delete', array('id' => $element->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
