<?php

namespace Newer\SI\DocsBundle\Controller\Acteurs;

use Newer\SI\DocsBundle\Entity\Acteurs\TypeUtilisateur;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Typeutilisateur controller.
 *
 * @Route("acteurs/typeutilisateur")
 */
class TypeUtilisateurController extends Controller
{
    /**
     * Lists all typeUtilisateur entities.
     *
     * @Route("/", name="acteurs_typeutilisateur_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $typeUtilisateurs = $em->getRepository('NSIDocsBundle:Acteurs\TypeUtilisateur')->findAll();

        return $this->render('acteurs/typeutilisateur/index.html.twig', array(
            'typeUtilisateurs' => $typeUtilisateurs,
        ));
    }

    /**
     * Creates a new typeUtilisateur entity.
     *
     * @Route("/new", name="acteurs_typeutilisateur_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $typeUtilisateur = new Typeutilisateur();
        $form = $this->createForm('Newer\SI\DocsBundle\Form\Acteurs\TypeUtilisateurType', $typeUtilisateur);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($typeUtilisateur);
            $em->flush($typeUtilisateur);

            return $this->redirectToRoute('acteurs_typeutilisateur_show', array('id' => $typeUtilisateur->getId()));
        }

        return $this->render('acteurs/typeutilisateur/new.html.twig', array(
            'typeUtilisateur' => $typeUtilisateur,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a typeUtilisateur entity.
     *
     * @Route("/{id}", name="acteurs_typeutilisateur_show")
     * @Method("GET")
     */
    public function showAction(TypeUtilisateur $typeUtilisateur)
    {
        $deleteForm = $this->createDeleteForm($typeUtilisateur);

        return $this->render('acteurs/typeutilisateur/show.html.twig', array(
            'typeUtilisateur' => $typeUtilisateur,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing typeUtilisateur entity.
     *
     * @Route("/{id}/edit", name="acteurs_typeutilisateur_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, TypeUtilisateur $typeUtilisateur)
    {
        $deleteForm = $this->createDeleteForm($typeUtilisateur);
        $editForm = $this->createForm('Newer\SI\DocsBundle\Form\Acteurs\TypeUtilisateurType', $typeUtilisateur);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('acteurs_typeutilisateur_edit', array('id' => $typeUtilisateur->getId()));
        }

        return $this->render('acteurs/typeutilisateur/edit.html.twig', array(
            'typeUtilisateur' => $typeUtilisateur,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a typeUtilisateur entity.
     *
     * @Route("/{id}", name="acteurs_typeutilisateur_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, TypeUtilisateur $typeUtilisateur)
    {
        $form = $this->createDeleteForm($typeUtilisateur);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($typeUtilisateur);
            $em->flush($typeUtilisateur);
        }

        return $this->redirectToRoute('acteurs_typeutilisateur_index');
    }

    /**
     * Creates a form to delete a typeUtilisateur entity.
     *
     * @param TypeUtilisateur $typeUtilisateur The typeUtilisateur entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(TypeUtilisateur $typeUtilisateur)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('acteurs_typeutilisateur_delete', array('id' => $typeUtilisateur->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
