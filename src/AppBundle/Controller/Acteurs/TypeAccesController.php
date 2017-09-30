<?php

namespace AppBundle\Controller\Acteurs;

use AppBundle\Entity\Acteurs\TypeAcces;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Typeacce controller.
 *
 * @Route("acteurs/typeacces")
 */
class TypeAccesController extends Controller
{
    /**
     * Lists all typeAcce entities.
     *
     * @Route("/", name="acteurs_typeacces_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $typeAcces = $em->getRepository('AppBundle:Acteurs\TypeAcces')->findAll();

        return $this->render('AppBundle:Acteurs:TypeAcces/index.html.twig', array(
            'typeAcces' => $typeAcces,
        ));
    }

    /**
     * Creates a new typeAcce entity.
     *
     * @Route("/new", name="acteurs_typeacces_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $typeAcce = new Typeacce();
        $form = $this->createForm('AppBundle\Form\Acteurs\TypeAccesType', $typeAcce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($typeAcce);
            $em->flush($typeAcce);

            return $this->redirectToRoute('acteurs_typeacces_show', array('id' => $typeAcce->getId()));
        }

        return $this->render('AppBundle:Acteurs:TypeAcces/new.html.twig', array(
            'typeAcce' => $typeAcce,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a typeAcce entity.
     *
     * @Route("/{id}", name="acteurs_typeacces_show")
     * @Method("GET")
     */
    public function showAction(TypeAcces $typeAcce)
    {
        $deleteForm = $this->createDeleteForm($typeAcce);

        return $this->render('AppBundle:Acteurs:TypeAcces/show.html.twig', array(
            'typeAcce' => $typeAcce,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing typeAcce entity.
     *
     * @Route("/{id}/edit", name="acteurs_typeacces_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, TypeAcces $typeAcce)
    {
        $deleteForm = $this->createDeleteForm($typeAcce);
        $editForm = $this->createForm('AppBundle\Form\Acteurs\TypeAccesType', $typeAcce);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('acteurs_typeacces_edit', array('id' => $typeAcce->getId()));
        }

        return $this->render('AppBundle:Acteurs:TypeAcces/edit.html.twig', array(
            'typeAcce' => $typeAcce,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a typeAcce entity.
     *
     * @Route("/{id}", name="acteurs_typeacces_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, TypeAcces $typeAcce)
    {
        $form = $this->createDeleteForm($typeAcce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($typeAcce);
            $em->flush($typeAcce);
        }

        return $this->redirectToRoute('acteurs_typeacces_index');
    }

    /**
     * Creates a form to delete a typeAcce entity.
     *
     * @param TypeAcces $typeAcce The typeAcce entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(TypeAcces $typeAcce)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('acteurs_typeacces_delete', array('id' => $typeAcce->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
