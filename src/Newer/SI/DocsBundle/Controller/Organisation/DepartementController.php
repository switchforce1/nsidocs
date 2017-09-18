<?php

namespace Newer\SI\DocsBundle\Controller\Organisation;

use Newer\SI\DocsBundle\Entity\Organisation\Departement;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Departement controller.
 *
 * @Route("organisation_departement")
 */
class DepartementController extends Controller
{
    /**
     * Lists all departement entities.
     *
     * @Route("/", name="organisation_departement_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $departements = $em->getRepository('NSIDocsBundle:Organisation\Departement')->findAll();

        return $this->render('organisation/departement/index.html.twig', array(
            'departements' => $departements,
        ));
    }

    /**
     * Creates a new departement entity.
     *
     * @Route("/new", name="organisation_departement_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $departement = new Departement();
        $form = $this->createForm('Newer\SI\DocsBundle\Form\Organisation\DepartementType', $departement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($departement);
            $em->flush($departement);

            return $this->redirectToRoute('organisation_departement_show', array('id' => $departement->getId()));
        }

        return $this->render('organisation/departement/new.html.twig', array(
            'departement' => $departement,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a departement entity.
     *
     * @Route("/{id}", name="organisation_departement_show")
     * @Method("GET")
     */
    public function showAction(Departement $departement)
    {
        $deleteForm = $this->createDeleteForm($departement);

        return $this->render('organisation/departement/show.html.twig', array(
            'departement' => $departement,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing departement entity.
     *
     * @Route("/{id}/edit", name="organisation_departement_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Departement $departement)
    {
        $deleteForm = $this->createDeleteForm($departement);
        $editForm = $this->createForm('Newer\SI\DocsBundle\Form\Organisation\DepartementType', $departement);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('organisation_departement_edit', array('id' => $departement->getId()));
        }

        return $this->render('organisation/departement/edit.html.twig', array(
            'departement' => $departement,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a departement entity.
     *
     * @Route("/{id}", name="organisation_departement_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Departement $departement)
    {
        $form = $this->createDeleteForm($departement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($departement);
            $em->flush($departement);
        }

        return $this->redirectToRoute('organisation_departement_index');
    }

    /**
     * Creates a form to delete a departement entity.
     *
     * @param Departement $departement The departement entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Departement $departement)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('organisation_departement_delete', array('id' => $departement->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
