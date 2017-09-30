<?php

namespace AppBundle\Controller\Document;

use AppBundle\Entity\Document\Fichier;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Fichier controller.
 *
 * @Route("document/fichier")
 */
class FichierController extends Controller
{
    /**
     * Lists all fichier entities.
     *
     * @Route("/", name="document_fichier_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $fichiers = $em->getRepository('AppBundle:Document\Fichier')->findAll();

        return $this->render('AppBundle:Document:Fichier/index.html.twig', array(
            'fichiers' => $fichiers,
        ));
    }

    /**
     * Creates a new fichier entity.
     *
     * @Route("/new", name="document_fichier_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $fichier = new Fichier();
        $form = $this->createForm('AppBundle\Form\Document\FichierType', $fichier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($fichier);
            $em->flush($fichier);

            return $this->redirectToRoute('document_fichier_show', array('id' => $fichier->getId()));
        }

        return $this->render('AppBundle:Document:Fichier/new.html.twig', array(
            'fichier' => $fichier,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a fichier entity.
     *
     * @Route("/{id}", name="document_fichier_show")
     * @Method("GET")
     */
    public function showAction(Fichier $fichier)
    {
        $deleteForm = $this->createDeleteForm($fichier);

        return $this->render('AppBundle:Document:Fichier/show.html.twig', array(
            'fichier' => $fichier,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing fichier entity.
     *
     * @Route("/{id}/edit", name="document_fichier_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Fichier $fichier)
    {
        $deleteForm = $this->createDeleteForm($fichier);
        $editForm = $this->createForm('AppBundle\Form\Document\FichierType', $fichier);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('document_fichier_edit', array('id' => $fichier->getId()));
        }

        return $this->render('AppBundle:Document:Fichier/edit.html.twig', array(
            'fichier' => $fichier,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a fichier entity.
     *
     * @Route("/{id}", name="document_fichier_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Fichier $fichier)
    {
        $form = $this->createDeleteForm($fichier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($fichier);
            $em->flush($fichier);
        }

        return $this->redirectToRoute('document_fichier_index');
    }

    /**
     * Creates a form to delete a fichier entity.
     *
     * @param Fichier $fichier The fichier entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Fichier $fichier)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('document_fichier_delete', array('id' => $fichier->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
