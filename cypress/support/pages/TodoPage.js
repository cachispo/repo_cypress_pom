class TodoPage {
    // Selectores
    elements = {
      inputNewTodo: () => cy.get('input.new-todo'),
      todoItemLabel: (itemText) => cy.contains('label', itemText),
      todoItems: () => cy.get('.todo-list li'),
      deleteButton: function(itemText) {  // ¡Función tradicional!
        return this.todoItemLabel(itemText).parent().find('button.destroy');
      },
    };
  
    // Métodos
    addTodo(taskName) {
      this.elements.inputNewTodo().type(`${taskName}{enter}`);
    }
  
    deleteTodo(taskName) {
      this.elements.todoItemLabel(taskName).click();
      this.elements.deleteButton(taskName).click();
    }
  
    validateTodoExists(taskName) {
      this.elements.todoItemLabel(taskName).should('be.visible');
    }
  }
  
export default TodoPage;