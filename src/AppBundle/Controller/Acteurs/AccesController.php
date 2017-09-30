<?php

namespace AppBundle\Controller\Acteurs;

use AppBundle\Entity\Acteurs\Acces;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Acces controller.
 *
 * @Route("acteurs/acces")
 */
class AccesController extends Controller
{
    /**
     * Lists all acce entities.
     *
     * @Route("/", name="acteurs_acces_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $acces = $em->getRepository('AppBundle:Acteurs\Acces')->findAll();

        return $this->render('AppBundle:Acteurs:Acces/index.html.twig', array(
            'acces' => $acces,
        ));
    }

    /**
     * Creates a new acce entity.
     *
     * @Route("/new", name="acteurs_acces_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $acce = new Acces();
        $form = $this->createForm('AppBundle\Form\Acteurs\AccesType', $acce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($acce);
            $em->flush($acce);

            return $this->redirectToRoute('acteurs_acces_show', array('id' => $acce->getId()));
        }

        return $this->render('AppBundle:Acteurs:Acces/new.html.twig', array(
            'acce' => $acce,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a acce entity.
     *
     * @Route("/{id}", name="acteurs_acces_show")
     * @Method("GET")
     */
    public function showAction(Acces $acce)
    {
        $deleteForm = $this->createDeleteForm($acce);

        return $this->render('AppBundle:Acteurs:Acces/show.html.twig', array(
            'acce' => $acce,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing acce entity.
     *
     * @Route("/{id}/edit", name="acteurs_acces_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Acces $acce)
    {
        $deleteForm = $this->createDeleteForm($acce);
        $editForm = $this->createForm('AppBundle\Form\Acteurs\AccesType', $acce);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('acteurs_acces_edit', array('id' => $acce->getId()));
        }

        return $this->render('AppBundle:Acteurs:Acces/edit.html.twig', array(
            'acce' => $acce,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a acce entity.
     *
     * @Route("/{id}", name="acteurs_acces_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Acces $acce)
    {
        $form = $this->createDeleteForm($acce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($acce);
            $em->flush($acce);
        }

        return $this->redirectToRoute('acteurs_acces_index');
    }

    /**
     * Creates a form to delete a acce entity.
     *
     * @param Acces $acce The acce entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Acces $acce)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('acteurs_acces_delete', array('id' => $acce->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
