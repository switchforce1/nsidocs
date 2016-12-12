<?php

namespace Neosolva\SI\DocsBundle\Controller\Organisation;

use Neosolva\SI\DocsBundle\Entity\Organisation\Employe;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Employe controller.
 *
 * @Route("organisation_employe")
 */
class EmployeController extends Controller
{
    /**
     * Lists all employe entities.
     *
     * @Route("/", name="organisation_employe_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $employes = $em->getRepository('NSIDocsBundle:Organisation\Employe')->findAll();

        return $this->render('organisation/employe/index.html.twig', array(
            'employes' => $employes,
        ));
    }

    /**
     * Creates a new employe entity.
     *
     * @Route("/new", name="organisation_employe_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $employe = new Employe();
        $form = $this->createForm('Neosolva\SI\DocsBundle\Form\Organisation\EmployeType', $employe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($employe);
            $em->flush($employe);

            return $this->redirectToRoute('organisation_employe_show', array('id' => $employe->getId()));
        }

        return $this->render('organisation/employe/new.html.twig', array(
            'employe' => $employe,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a employe entity.
     *
     * @Route("/{id}", name="organisation_employe_show")
     * @Method("GET")
     */
    public function showAction(Employe $employe)
    {
        $deleteForm = $this->createDeleteForm($employe);

        return $this->render('organisation/employe/show.html.twig', array(
            'employe' => $employe,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing employe entity.
     *
     * @Route("/{id}/edit", name="organisation_employe_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Employe $employe)
    {
        $deleteForm = $this->createDeleteForm($employe);
        $editForm = $this->createForm('Neosolva\SI\DocsBundle\Form\Organisation\EmployeType', $employe);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('organisation_employe_edit', array('id' => $employe->getId()));
        }

        return $this->render('organisation/employe/edit.html.twig', array(
            'employe' => $employe,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a employe entity.
     *
     * @Route("/{id}", name="organisation_employe_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Employe $employe)
    {
        $form = $this->createDeleteForm($employe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($employe);
            $em->flush($employe);
        }

        return $this->redirectToRoute('organisation_employe_index');
    }

    /**
     * Creates a form to delete a employe entity.
     *
     * @param Employe $employe The employe entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Employe $employe)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('organisation_employe_delete', array('id' => $employe->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
