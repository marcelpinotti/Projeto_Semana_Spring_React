package com.marcelpinotti.sdvendas.services;

import com.marcelpinotti.sdvendas.DTO.SaleDTO;
import com.marcelpinotti.sdvendas.entities.Sale;
import com.marcelpinotti.sdvendas.repositories.SaleRepository;
import com.marcelpinotti.sdvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true) // toda transação com o banco seja resolvida no momento do service, não fazer look no banco.
    public Page<SaleDTO> findAll(Pageable pageable){
        sellerRepository.findAll(); // Solução simples para criar a lista em memória a JPA cria um cache em memória e o JPA não ir buscar o saller automaticamente toda vez no banco de dados por causa dos relacionamento entre as entidades.
        Page<Sale> result = saleRepository.findAll( pageable);
        return result.map(x -> new SaleDTO(x));
    }

}
