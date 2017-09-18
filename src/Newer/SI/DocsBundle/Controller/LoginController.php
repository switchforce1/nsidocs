<?php

namespace Newer\SI\DocsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class LoginController extends Controller
{
    /**
     * @Route("/login1")
     */
    public function indexAction()
    {
        return $this->render('NSIDocsBundle:Login:connexion.html.twig');
    }
    
    /**
     * @Route("/logout1")
     */
    public function logoutAction()
    {
        return $this->render('NSIDocsBundle:Login:logout.html.twig');
    }
}
