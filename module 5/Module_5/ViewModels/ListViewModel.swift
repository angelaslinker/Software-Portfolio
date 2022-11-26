//
//  ListViewModel.swift
//  Module_5
//
//  Created by Angela Slinker on 11/25/22.
//

import Foundation

class ListViewModel: ObservableObject{
    @Published var items: [itemModel] = []
    
    init() {
        getItems()
    }
    
   //creates new Array to hold the data from user input
    
    func getItems(){
        let newItems = [
                itemModel(title: "Click the Add button to Add a task", IsComplete: false)
            ]
           
        items.append(contentsOf: newItems)
    }
    
    func addItem(title: String){
        let newItem = itemModel(title: title, IsComplete: false)
        items.append(newItem)
    }
}
