<?php

namespace AppBundle\Controller\Document;

use AppBundle\Entity\Document\Proposition;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Proposition controller.
 *
 * @Route("document/proposition")
 */
class PropositionController extends Controller
{
    /**
     * Lists all proposition entities.
     *
     * @Route("/", name="document_proposition_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $propositions = $em->getRepository('AppBundle:Document\Proposition')->findAll();

        return $this->render('AppBundle:Document:Proposition/index.html.twig', array(
            'propositions' => $propositions,
        ));
    }

    /**
     * Creates a new proposition entity.
     *
     * @Route("/new", name="document_proposition_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $proposition = new Proposition();
        $form = $this->createForm('AppBundle\Form\Document\PropositionType', $proposition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($proposition);
            $em->flush($proposition);

            return $this->redirectToRoute('document_proposition_show', array('id' => $proposition->getId()));
        }

        return $this->render('AppBundle:Document:Proposition/new.html.twig', array(
            'proposition' => $proposition,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a proposition entity.
     *
     * @Route("/{id}", name="document_proposition_show")
     * @Method("GET")
     */
    public function showAction(Proposition $proposition)
    {
        $deleteForm = $this->createDeleteForm($proposition);

        return $this->render('AppBundle:Document:Proposition/show.html.twig', array(
            'proposition' => $proposition,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing proposition entity.
     *
     * @Route("/{id}/edit", name="document_proposition_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Proposition $proposition)
    {
        $deleteForm = $this->createDeleteForm($proposition);
        $editForm = $this->createForm('AppBundle\Form\Document\PropositionType', $proposition);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_proposition_edit', array('id' => $proposition->getId()));
        }

        return $this->render('AppBundle:Document:Proposition/edit.html.twig', array(
            'proposition' => $proposition,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a proposition entity.
     *
     * @Route("/{id}", name="document_proposition_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Proposition $proposition)
    {
        $form = $this->createDeleteForm($proposition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($proposition);
            $em->flush($proposition);
        }

        return $this->redirectToRoute('document_proposition_index');
    }

    /**
     * Creates a form to delete a proposition entity.
     *
     * @param Proposition $proposition The proposition entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Proposition $proposition)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_proposition_delete', array('id' => $proposition->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
