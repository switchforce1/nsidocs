<?php

namespace Newer\SI\DocsBundle\Controller\Document;

use Newer\SI\DocsBundle\Entity\Document\Section;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Section controller.
 *
 * @Route("document_section")
 */
class SectionController extends Controller
{
    /**
     * Lists all section entities.
     *
     * @Route("/", name="document_section_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $sections = $em->getRepository('NSIDocsBundle:Document\Section')->findAll();

        return $this->render('document/section/index.html.twig', array(
            'sections' => $sections,
        ));
    }

    /**
     * Creates a new section entity.
     *
     * @Route("/new", name="document_section_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $section = new Section();
        $form = $this->createForm('Newer\SI\DocsBundle\Form\Document\SectionType', $section);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($section);
            $em->flush($section);

            return $this->redirectToRoute('document_section_show', array('id' => $section->getId()));
        }

        return $this->render('document/section/new.html.twig', array(
            'section' => $section,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a section entity.
     *
     * @Route("/{id}", name="document_section_show")
     * @Method("GET")
     */
    public function showAction(Section $section)
    {
        $deleteForm = $this->createDeleteForm($section);

        return $this->render('document/section/show.html.twig', array(
            'section' => $section,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing section entity.
     *
     * @Route("/{id}/edit", name="document_section_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Section $section)
    {
        $deleteForm = $this->createDeleteForm($section);
        $editForm = $this->createForm('Newer\SI\DocsBundle\Form\Document\SectionType', $section);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_section_edit', array('id' => $section->getId()));
        }

        return $this->render('document/section/edit.html.twig', array(
            'section' => $section,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a section entity.
     *
     * @Route("/{id}", name="document_section_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Section $section)
    {
        $form = $this->createDeleteForm($section);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($section);
            $em->flush($section);
        }

        return $this->redirectToRoute('document_section_index');
    }

    /**
     * Creates a form to delete a section entity.
     *
     * @param Section $section The section entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Section $section)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_section_delete', array('id' => $section->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
