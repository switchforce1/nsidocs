<?php

namespace AppBundle\Controller\Document;

use AppBundle\Entity\Document\Creation;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Creation controller.
 *
 * @Route("document/creation")
 */
class CreationController extends Controller
{
    /**
     * Lists all creation entities.
     *
     * @Route("/", name="document_creation_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $creations = $em->getRepository('AppBundle:Document\Creation')->findAll();

        return $this->render('AppBundle:Document:Creation/index.html.twig', array(
            'creations' => $creations,
        ));
    }

    /**
     * Creates a new creation entity.
     *
     * @Route("/new", name="document_creation_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $creation = new Creation();
        $form = $this->createForm('AppBundle\Form\Document\CreationType', $creation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($creation);
            $em->flush($creation);

            return $this->redirectToRoute('document_creation_show', array('id' => $creation->getId()));
        }

        return $this->render('AppBundle:Document:Creation/new.html.twig', array(
            'creation' => $creation,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a creation entity.
     *
     * @Route("/{id}", name="document_creation_show")
     * @Method("GET")
     */
    public function showAction(Creation $creation)
    {
        $deleteForm = $this->createDeleteForm($creation);

        return $this->render('AppBundle:Document:Creation/show.html.twig', array(
            'creation' => $creation,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing creation entity.
     *
     * @Route("/{id}/edit", name="document_creation_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Creation $creation)
    {
        $deleteForm = $this->createDeleteForm($creation);
        $editForm = $this->createForm('AppBundle\Form\Document\CreationType', $creation);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_creation_edit', array('id' => $creation->getId()));
        }

        return $this->render('AppBundle:Document:Creation/edit.html.twig', array(
            'creation' => $creation,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a creation entity.
     *
     * @Route("/{id}", name="document_creation_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Creation $creation)
    {
        $form = $this->createDeleteForm($creation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($creation);
            $em->flush($creation);
        }

        return $this->redirectToRoute('document_creation_index');
    }

    /**
     * Creates a form to delete a creation entity.
     *
     * @param Creation $creation The creation entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Creation $creation)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_creation_delete', array('id' => $creation->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
