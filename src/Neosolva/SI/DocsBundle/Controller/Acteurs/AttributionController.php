<?php

namespace Neosolva\SI\DocsBundle\Controller\Acteurs;

use Neosolva\SI\DocsBundle\Entity\Acteurs\Attribution;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Attribution controller.
 *
 * @Route("acteurs_attribution")
 */
class AttributionController extends Controller
{
    /**
     * Lists all attribution entities.
     *
     * @Route("/", name="acteurs_attribution_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $attributions = $em->getRepository('NSIDocsBundle:Acteurs\Attribution')->findAll();

        return $this->render('acteurs/attribution/index.html.twig', array(
            'attributions' => $attributions,
        ));
    }

    /**
     * Creates a new attribution entity.
     *
     * @Route("/new", name="acteurs_attribution_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $attribution = new Attribution();
        $form = $this->createForm('Neosolva\SI\DocsBundle\Form\Acteurs\AttributionType', $attribution);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($attribution);
            $em->flush($attribution);

            return $this->redirectToRoute('acteurs_attribution_show', array('id' => $attribution->getId()));
        }

        return $this->render('acteurs/attribution/new.html.twig', array(
            'attribution' => $attribution,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a attribution entity.
     *
     * @Route("/{id}", name="acteurs_attribution_show")
     * @Method("GET")
     */
    public function showAction(Attribution $attribution)
    {
        $deleteForm = $this->createDeleteForm($attribution);

        return $this->render('acteurs/attribution/show.html.twig', array(
            'attribution' => $attribution,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing attribution entity.
     *
     * @Route("/{id}/edit", name="acteurs_attribution_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Attribution $attribution)
    {
        $deleteForm = $this->createDeleteForm($attribution);
        $editForm = $this->createForm('Neosolva\SI\DocsBundle\Form\Acteurs\AttributionType', $attribution);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('acteurs_attribution_edit', array('id' => $attribution->getId()));
        }

        return $this->render('acteurs/attribution/edit.html.twig', array(
            'attribution' => $attribution,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a attribution entity.
     *
     * @Route("/{id}", name="acteurs_attribution_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Attribution $attribution)
    {
        $form = $this->createDeleteForm($attribution);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($attribution);
            $em->flush($attribution);
        }

        return $this->redirectToRoute('acteurs_attribution_index');
    }

    /**
     * Creates a form to delete a attribution entity.
     *
     * @param Attribution $attribution The attribution entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Attribution $attribution)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('acteurs_attribution_delete', array('id' => $attribution->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
